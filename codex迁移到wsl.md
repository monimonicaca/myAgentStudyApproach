# WSL + Ubuntu + Codex + GitHub 开发环境疑惑总结

根据我们之前关于 **Codex 安装到 Ubuntu、WSL2、Git、SSH、项目目录、Ubuntu 迁移到 D 盘** 的讨论，我整理出几个核心疑惑点。

---

# 疑惑点 1：为什么 Codex 装在 Ubuntu 后，还需要在 Ubuntu 安装 Git、JDK、Maven？

## 我的疑惑

> 我的项目都在 GitHub 上，为什么 Ubuntu 里面还需要安装 Git？
>
> Windows 已经安装了 JDK，为什么 Ubuntu 里面还需要安装 JDK？

---

## 解释

因为：

**GitHub ≠ Git**

GitHub 是远程代码仓库。

Git 是本地操作工具。

例如：

```bash
git clone
git pull
git commit
git push
```

这些命令都是由本地 Git 程序执行。

你的环境：

```
GitHub
   ↑
   |
Ubuntu Git
   ↑
   |
Codex
```

Codex 在 Ubuntu 里运行：

例如你告诉 Codex：

> 拉取最新代码

它执行：

```bash
git pull
```

调用的是：

```
Ubuntu里面的Git
```

不是 Windows 的 Git。

---

JDK、Maven 同理。

例如 Spring Boot 项目：

```
项目代码
    |
    |
 Maven
    |
    |
 JDK
    |
    |
 Java程序
```

如果 Codex 在 Ubuntu：

执行：

```bash
mvn test
```

实际环境：

```
Ubuntu

mvn
 |
JDK
 |
Java
```

所以 Ubuntu 必须有自己的：

```
Git
JDK
Maven
Node
Python
```

---

**你的理解：**

> （你之前的疑问是）“虚拟操作系统为什么还需要安装开发环境？”

---

# 疑惑点 2：Ubuntu 移动到 D 盘后，项目是不是也自动到了 D 盘？

## 我的疑惑

> 我已经把 Ubuntu 从 C 盘移动到 D 盘了，为什么 Git clone 还是提示我在 C 盘？
>
> 难道我要在 D:\WSL\Ubuntu-24.04 目录里面打开 WSL？

---

## 解释

不是。

WSL 的结构：

```
D:
 |
 └── WSL
      |
      └── Ubuntu-24.04
             |
             └── ext4.vhdx
```

这个：

```
ext4.vhdx
```

就是完整 Ubuntu 系统。

里面有：

```
/
├── home
├── usr
├── etc
├── var
```

所以：

你的 Ubuntu 已经在 D 盘。

---

但是：

WSL 同时提供访问 Windows 文件：

```
/mnt/c
```

对应：

```
C:\
```

例如：

Linux：

```bash
/mnt/c/Users/PC
```

实际：

```
C:\Users\PC
```

---

你之前：

```bash
cd /mnt/c/Users/PC
```

所以：

你虽然使用的是 Ubuntu 的 Git，

但是你把项目放到了：

```
Windows C盘
```

---

正确位置：

```bash
cd ~
```

进入：

```
/home/moni
```

这里属于：

```
D:\WSL\Ubuntu-24.04\ext4.vhdx
```

---

**你的理解：**

> “Ubuntu 在 D 盘，但是打开 WSL 后，它链接到了 C 盘？”

修正：

**Ubuntu 没有链接到 C 盘，而是 Ubuntu 可以通过 `/mnt/c` 访问 C 盘。你当时进入的是 Windows 文件系统，而不是 Ubuntu 文件系统。**

---

# 疑惑点 3：为什么 Git clone 提示「密集型 IO，需要 Linux 文件系统」？

## 我的疑惑

> 为什么 Git 认为这是 IO 密集操作？
>
> 我 clone 成功了，为什么还说性能不好？

---

## 解释

你当时：

```bash
moni@xxx:/mnt/c/Users/PC$
```

路径：

```
/mnt/c
```

实际上：

```
Windows NTFS
```

流程：

```
Ubuntu程序
    |
    |
WSL转换层
    |
    |
Windows NTFS
```

Git clone 会大量操作：

```
创建文件
创建目录
写.git对象
修改权限
读取小文件
```

所以速度慢。

例如：

Linux 文件系统：

```
Ubuntu
 |
 /home/moni/project

直接操作 ext4
```

速度快。

Windows 文件系统：

```
Ubuntu
 |
 /mnt/c
 |
 NTFS
```

需要转换。

---

正确：

```bash
/home/moni/workspace/project
```

错误：

```bash
/mnt/c/Users/PC/project
```

---

# 疑惑点 4：Git 到底安装在哪里？

## 我的疑惑

> 我 clone 项目到了 C 盘，是不是 Git 也安装到了 C 盘？

---

## 解释

不是。

需要区分：

## Git程序

例如：

```bash
which git
```

结果：

```
/usr/bin/git
```

说明：

Git 在 Ubuntu。

位置：

```
Ubuntu
 |
 /usr/bin/git
```

---

## Git仓库

例如：

你的项目：

```
/mnt/c/Users/PC/workspace/WriteSelf
```

只是代码位置。

---

关系：

```
Ubuntu里的Git程序

        |
        |
        ↓

C盘里的项目文件
```

程序在哪里和项目在哪里没有关系。

---

**你的理解：**

> “文件系统在C盘，但是Ubuntu在D盘？”

修正：

**Ubuntu 的 Linux 文件系统在 D 盘的 ext4.vhdx 中；C盘只是通过 `/mnt/c` 被 Ubuntu 挂载访问。**

---

# 疑惑点 5：为什么启动 Ubuntu 后默认进入 `/mnt/c/Users/PC`？

## 我的疑惑

> 为什么我打开 Ubuntu 后不是 `/home/moni`，而是：

```bash
/mnt/c/Users/PC
```

---

## 解释

WSL 启动位置可以配置。

正常：

```bash
moni@xxx:~$
```

表示：

```
/home/moni
```

但是你的启动目录被设置成：

```
C:\Users\PC
```

所以启动后进入：

```
/mnt/c/Users/PC
```

---

解决：

进入 Ubuntu：

```bash
cd ~
```

以后创建项目：

```bash
mkdir workspace
cd workspace
```

即可。

---

# 疑惑点 6：WSL 项目应该放哪里？Windows IDE 怎么打开？

## 推荐架构

你的开发环境：

```
Windows

├── IntelliJ IDEA
├── Android Studio
├── Chrome


WSL Ubuntu

├── Codex
├── Git
├── JDK
├── Maven
└── 项目代码
```

---

项目：

```
/home/moni/workspace
        |
        └── WriteSelf
```

---

Windows IDEA 打开：

```
\\wsl$\Ubuntu-24.04\home\moni\workspace\WriteSelf
```

不要：

```
C:\Users\PC\workspace
```

---

# 疑惑点 7：SSH连接GitHub为什么失败？

## 我的疑惑

执行：

```bash
ssh -T git@github.com
```

出现：

```
Connection closed by 198.18.0.16 port 22
```

---

## 解释

问题不是 SSH Key。

而是：

你的代理软件使用 Fake IP。

例如：

正常：

```
github.com
        |
        ↓
140.xx.xx.xx
```

Fake IP：

```
github.com
        |
        ↓
198.18.0.16
```

这个 IP 是代理虚拟地址。

SSH 不知道：

```
198.18.0.16 = github.com
```

所以失败。

解决：

SSH走443：

`~/.ssh/config`

```text
Host github.com
    HostName ssh.github.com
    User git
    Port 443
```

---

# 最终推荐你的开发架构

```
D盘

WSL Ubuntu
|
├── /usr/bin/git
├── /usr/lib/jvm
├── Maven
├── Codex
|
└── /home/moni/workspace
        |
        └── 项目


Windows

├── IDEA
├── Android Studio
├── 浏览器
└── Docker Desktop
```

工作流：

```
IDEA(Android Studio)
          |
          |
          ↓

WSL Linux项目目录

          |
          |
          ↓

Codex修改代码

          |
          |
          ↓

Git提交

          |
          |
          ↓

GitHub
```

---

## 一句话总结你的核心认知变化

以前你的理解：

> “Ubuntu 是一个装在 D 盘的东西，但是我打开后不知道为什么跑到了 C 盘。”

正确模型：

> **WSL Ubuntu 是一个完整 Linux 系统，存储在 D 盘；它同时挂载了 Windows 的 C、D 盘到 `/mnt/c`、`/mnt/d`。你之前只是进入了 Windows 文件系统路径，而不是 Ubuntu 自己的 Linux 文件系统。**
