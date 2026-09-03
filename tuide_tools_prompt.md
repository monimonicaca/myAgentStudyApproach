
```text
Please build a Python automation tool for processing X (Twitter) post JSON data that I have manually exported. The tool should organize, deduplicate, store, download media, and generate Chinese articles suitable for publishing on domestic Chinese platforms (such as WeChat Official Account, Zhihu, Bilibili column). The tool must be modular, easy to run, and support incremental imports.

## Background and Data Source
I use a Violentmonkey browser script to manually export post data from X accounts. The data is saved as JSON files, which may be multiple files (each file contains the result of one scraping session). Each JSON file is a list of post objects. Each post object may contain the following fields (example):
```json
{
  "id": 2092248774114791669,
  "created_at": "2026-08-25 21:52:34 +08:00",
  "full_text": "Experience TUIDE’s new release... #SpatialAudio #TUIDE",
  "screen_name": "TUIDE_official",
  "name": "TUIDE",
  "url": "https://twitter.com/TUIDE_official/status/2092248774114791669",
  "favorite_count": 120,
  "retweet_count": 30,
  "reply_count": 5,
  "quote_count": 2,
  "bookmark_count": 10,
  "views_count": 5000,
  "lang": "en",
  "media": [
    {
      "type": "video",
      "url": "https://.../video/1",
      "thumbnail": "https://.../thumb.jpg",
      "original": "https://video.twimg.com/.../1080x1080.mp4",
      "video_info": {
        "variants": [
          {"content_type": "video/mp4", "url": "https://.../320x320.mp4", "bitrate": 320000},
          {"content_type": "video/mp4", "url": "https://.../1080x1080.mp4", "bitrate": 8768000}
        ]
      }
    }
  ],
  "in_reply_to": null,
  "retweeted_status": null,
  "quoted_status": null
}
```
Actual fields may vary slightly, but the core fields (id, full_text, media, screen_name, created_at) always exist. Please write robust code with error handling for missing fields.

## Project Structure Requirements
Generate the complete project with the following structure:

```
tuide-archiver/
├── data/
│   ├── raw/                  # Manually exported JSON files (user places them here)
│   ├── media/                # Downloaded media files, organized by post_id folder
│   └── tuide.db              # SQLite database
├── output/                   # Final exported results
│   └── {post_id}/
│       ├── article.md        # Generated Chinese article (Markdown format)
│       └── media/            # Copied or referenced local media files
├── src/
│   ├── __init__.py
│   ├── config.py             # Configuration (paths, database name, LLM parameters)
│   ├── loader.py             # Load local JSON files
│   ├── parser.py             # Parse raw post into standardized data structure
│   ├── database.py           # Database initialization, insertion, query, deduplication
│   ├── media_downloader.py   # Download media files (images/videos)
│   ├── article_generator.py  # Generate Chinese article (using LLM or simple template)
│   ├── exporter.py           # Export article and media to output directory
│   └── logger.py             # Logging configuration
├── main.py                   # Main entry point, command-line argument parsing
├── requirements.txt          # Dependency list
└── README.md                 # Usage instructions
```

## Detailed Functionality of Each Module

### 1. `config.py`
- Define project root directory, data directory, database path, output directory, etc.
- Provide LLM related configurations (e.g., API key, model name), allowing overrides via environment variables or a `.env` file.
- Set default request headers (User-Agent) for downloading media.

### 2. `loader.py`
- Provide `load_posts_from_file(json_path)` function: read a single JSON file and return a list of posts (raw dicts).
- Provide `load_posts_from_directory(directory_path)` function: read all `.json` files in a directory, merge and return all posts, deduplicating based on `id`.
- Handle JSON parsing errors, skip corrupted files and log a warning.

### 3. `parser.py`
- Provide `parse_post(raw_post)` function: input raw dict, output a standardized dict with the following fields:
  - `id` (string)
  - `created_at` (string, keep as-is)
  - `screen_name`
  - `name`
  - `full_text`
  - `source_url` (post link, from `url` field)
  - `favorite_count`, `retweet_count`, `reply_count`, `quote_count`, `bookmark_count`, `views_count` (integers, default to 0 if missing)
  - `lang`
  - `in_reply_to`, `retweeted_status`, `quoted_status` (raw fields, may be objects or None, serialize to strings)
  - `media`: parsed list of media, each media object contains:
    - `index` (starting from 1)
    - `type` ("photo", "video", or "animated_gif")
    - `url` (original display URL)
    - `thumbnail`
    - `original` (original media URL)
    - `download_url` (actual download URL; for videos choose the highest bitrate mp4, for images use `original` or `url`)
  - `raw_json`: raw JSON string (to preserve complete data)
- Handle missing fields without throwing exceptions.

### 4. `database.py`
- Use `sqlite3` to create the database and two tables:
  - `posts` table:
    - `id TEXT PRIMARY KEY`
    - `created_at TEXT`
    - `screen_name TEXT`
    - `name TEXT`
    - `full_text TEXT`
    - `source_url TEXT`
    - `favorite_count INTEGER`
    - `retweet_count INTEGER`
    - `reply_count INTEGER`
    - `quote_count INTEGER`
    - `bookmark_count INTEGER`
    - `views_count INTEGER`
    - `lang TEXT`
    - `in_reply_to TEXT`
    - `retweeted_status TEXT`
    - `quoted_status TEXT`
    - `raw_json TEXT`
  - `media` table:
    - `id INTEGER PRIMARY KEY AUTOINCREMENT`
    - `post_id TEXT`
    - `media_index INTEGER`
    - `media_type TEXT`
    - `url TEXT`
    - `thumbnail TEXT`
    - `original TEXT`
    - `download_url TEXT`
    - `local_path TEXT`
    - `download_status TEXT` (default "pending", then "downloaded" or "failed")
    - Set unique constraint `UNIQUE(post_id, media_index)`
- Provide functions:
  - `init_db()`: create table structures.
  - `post_exists(post_id)`: return boolean.
  - `insert_post(post_dict)`: insert post using `INSERT OR IGNORE`.
  - `insert_media(media_dict)`: insert media record using `INSERT OR IGNORE`.
  - `get_pending_media()`: query all media records with `download_status='pending'`.
  - `update_media_status(media_id, status, local_path=None)`.
  - `get_all_posts()`: return all posts.
  - `get_post_by_id(post_id)`.
- Note: If `retweeted_status` and `quoted_status` are complex objects, stringify them to JSON before storing.

### 5. `media_downloader.py`
- Provide `download_media(media_list, post_id)` function: iterate through media list, create target directory `data/media/{post_id}/`, download files and name them:
  - Images: `{index:02d}.jpg` or according to extension (e.g., `.png`, `.gif`).
  - Videos: `{index:02d}.mp4` (if URL has no extension, default to `.mp4`).
- Use `requests` library with reasonable timeouts and retry mechanism (up to 3 times).
- After successful download, update `media` table with `local_path` and `download_status`.
- If download fails, log the error, set status to `failed`, and continue without interrupting the overall process.
- Support `--force-download` parameter (handled in main function): if present and post already has media files, decide whether to skip or re-download (can be specified).

### 6. `article_generator.py`
- Goal: generate Chinese article suitable for domestic platforms based on post data.
- Provide `generate_article(post_data, platform="wechat")` function.
- **Implementation**: Try to call an LLM (e.g., OpenAI API). If API key is not configured or the call fails, use a simple built-in template as fallback.
- LLM call: use the `openai` library (if user has configured API key), send the following prompt:
  ```
  Please rewrite the following English tweet content into a Chinese article suitable for publishing on WeChat Official Account.
  Requirements:
  1. An attractive title, no more than 20 characters.
  2. Fluent and natural body text, well-structured with paragraphs and subheadings if necessary.
  3. Remove all external links and Twitter-specific elements (like @username).
  4. Keep and translate #hashtags, format like #话题#.
  5. If the post contains videos or images, insert placeholders like [图片1], [视频1] in the text.
  6. Add necessary background explanation or commentary.

  Tweet content:
  {full_text}

  Media type list: {media_types}
  ```
- Parse the LLM response to extract title and body (assume a format like `标题：xxx\n正文：xxx` or similar; provide a parsing strategy).
- Fallback template: generate a simple Chinese article, for example:
  - Title: take the first 20 characters of `full_text` (removing @ and #).
  - Body: output the `full_text` as-is with a short introductory sentence, and mark media placeholders.
- Return format: a tuple `(title, body)`.

### 7. `exporter.py`
- Provide `export_article(post_id, title, body, media_paths, output_dir="output")` function.
- Create `output/{post_id}/` directory for each post.
- Write `article.md` file in that directory with title as Markdown H1 and body text.
- Replace placeholders in the body like `[图片1]`, `[视频1]` with relative local file references (e.g., `![图片1](media/01.jpg)` or `[视频1](media/01.mp4)`).
- Also copy media files to `output/{post_id}/media/` directory (optional, depending on config).
- Ensure relative paths work correctly in the Markdown file.

### 8. `main.py`
- Command-line entry with support for the following arguments:
  - `--json <file_path>`: specify a single JSON file to import.
  - `--dir <directory_path>`: specify a directory containing multiple JSON files to import.
  - `--platform <platform>`: target platform (default "wechat"), passed to article generator.
  - `--force-download`: force re-download media even if database records exist.
  - `--skip-article`: skip article generation, only perform data import and media download (for testing).
- Flow:
  1. Initialize database.
  2. Load posts (based on arguments).
  3. For each post:
     - Check if it already exists (`post_exists`). If exists and no `--force-download`, skip it entirely; if exists and `--force-download`, continue processing media (re-download) but skip database insertion.
     - Parse the post (`parse_post`).
     - Insert post into database (if it did not exist before).
     - Insert media records (if they did not exist before).
     - Collect the post's media download list and call `download_media`.
     - If not skipping article generation, call `generate_article` to get title and body.
     - Call `export_article` to export.
  4. Print statistics (number of new posts, downloaded media, generated articles, etc.).
- Add logging to console and file (`tuide_archiver.log`).

### 9. `requirements.txt`
List required libraries: `requests`, `python-dotenv`, `openai` (optional but recommended; comment that it can be removed if not needed).  
`sqlite3` is from standard library, no extra dependency.

### 10. `README.md`
Briefly explain project purpose, directory structure, installation steps, configuration (setting environment variables for API key), and run examples.

## Other Requirements
- Code should have detailed comments explaining key steps.
- Exception handling should be robust to avoid crashing the whole program due to a single post parsing failure.
- Follow Python best practices: use `pathlib` for paths, use `logging` for logging.
- Type hints are optional but recommended.

Please generate the complete project code organized as described above. Ensure the code can run directly without additional modifications (except configuring API key).
```