

1、直接在源码中搜索，你想要探索的功能界面按键文字或者是其他的你能看到的文字就行，比如在添加服务器界面有一个添加服务器按钮，然后在你的编译器中搜索添加服务器，会定位到中文语言包看到有很多语言包，因为opencode使用了i18n来实现多语言，i18n可以让你的应用支持多种语言，而不需要使用if（某个国家）{使用这个国家的语言}这种手动切换的格式。
2、不用管这些语言包，只用管这个key值在什么tsx文件中使用就行-->在packages\app\src\components\dialog-select-server.tsx中使用了。
```tsx
<Button variant="primary" size="large" onClick={submitForm} disabled={formBusy()} class="px-3 py-1.5">
              {formBusy()
                ? language.t("dialog.server.add.checking")
                : isAddMode()
                  ? language.t("dialog.server.add.button")
                  : language.t("common.save")}
            </Button>
          </Show>
```
可以看到点击之后会触发submitForm函数
```js
 const submitForm = () => {
    if (mode() === "add") {
      void handleAdd(store.addServer.url)
      return
    }
    const original = editing()
    if (!original) return
    void handleEdit(original, store.editServer.value)
  }
```
ServerConnection
```tsx
export namespace ServerConnection {
  type Base = { displayName?: string }

  export type HttpBase = {
    url: string
    username?: string
    password?: string
  }

  // Regular web connections
  export type Http = {
    type: "http"
    http: HttpBase
  } & Base

  export type Sidecar = {
    type: "sidecar"
    http: HttpBase
  } & (
    | // Regular desktop server
    { variant: "base" }
    // WSL server (windows only)
    | {
        variant: "wsl"
        distro: string
      }
  ) &
    Base

  // Remote server desktop can SSH into
  export type Ssh = {
    type: "ssh"
    host: string
    // SSH client exposes an HTTP server for the app to use as a proxy
    http: HttpBase
  } & Base

  export type Any =
    | Http
    // All these are desktop-only
    | (Sidecar | Ssh)

  export const key = (conn: Any): Key => {
    switch (conn.type) {
      case "http":
        return Key.make(conn.http.url)
      case "sidecar": {
        if (conn.variant === "wsl") return Key.make(`wsl:${conn.distro}`)
        return Key.make("sidecar")
      }
      case "ssh":
        return Key.make(`ssh:${conn.host}`)
    }
  }

  export type Key = string & { _brand: "Key" }
  export const Key = { make: (v: string) => v as Key }
}
```
因为我们知道我们点击的是添加服务器，所以直接进入到handleAdd函数
```tsx  
async function handleAdd(value: string) {
    //如果当前状态是正在添加，则不进行操作（说明当前正在执行某一个服务器的添加操作）
    if (store.addServer.adding) return
    //转成规范化的服务器地址
    const normalized = normalizeServerUrl(value)
    //如果为空，直接返回
    if (!normalized) {
      resetAdd()
      return
    }
    //设置正在添加服务器状态
    setStore("addServer", { adding: true, error: "" })
    //创建一个http格式的连接对象
    const conn: ServerConnection.Http = {
      type: "http",
      http: { url: normalized },
    }
    //opencode使用的是react来构建页面，使用MVVM：当用户在输入框中输入时，这个值自动绑定到这个组件的value值上面，下面这几行代码就是将用户输入的值赋值给上一步创建的连接对象的属性上
    if (store.addServer.name.trim()) conn.displayName = store.addServer.name.trim()
    if (store.addServer.password) conn.http.password = store.addServer.password
    if (store.addServer.password && store.addServer.username) conn.http.username = store.addServer.username
    //会像这个服务器发送两个请求/api/health和/global/health,当服务器返回体中healthy字段为true时，表示这个服务器可以连接
    const result = await checkServerHealth(conn.http)
    setStore("addServer", { adding: false })
    if (!result.healthy) {
      setStore("addServer", { error: language.t("dialog.server.add.error") })
      return
    }
    //清空添加服务器状态数据
    resetAdd()
    //持久化存储这个服务器配置
    await select(conn, true)
  }
```
进入select函数
```tsx
async function select(conn: ServerConnection.Any, persist?: boolean) {
    //非持久化或者healthy为false就不做操作
    if (!persist && store.status[ServerConnection.key(conn)]?.healthy === false) return
    //关闭对话框
    dialog.close()
    if (persist && conn.type === "http") {
      //调用packages\app\src\context\server.tsx的add方法持久化服务器配置
      server.add(conn)
      //跳回到主页packages\app\src\pages\home.tsx
      navigate("/")
      return
    }
    server.setActive(ServerConnection.key(conn))
    navigate("/")
  }
```
进入packages\app\src\context\server.tsx的add函数
```tsx
function add(input: ServerConnection.Http) {
      const url_ = normalizeServerUrl(input.http.url)
      if (!url_) return
      const conn = { ...input, http: { ...input.http, url: url_ } }
      return batch(() => {
        const existing = store.list.findIndex((x) => url(x) === url_)
        if (existing !== -1) {
          //如果此连接已经存在了，更新即可
          setStore("list", existing, conn)
        } else {
          //将连接添加
          setStore("list", store.list.length, conn)
        }
        setState("active", ServerConnection.key(conn))
        return conn
      })
    }
```
setStore是从packages\app\src\utils\persist.ts的persisted方法中解构出来的,createStore方法是solid-js中的一个函数，它可以创建一个状态管理器，并且返回[Store<T>, SetStoreFunction<T>]，返回响应式状态代理对象和更新函数,但是返回的是无法持久话的，也就是说即使用了它返回的setStore方法，等应用一关闭，数据就消失了，所以这里opencode自己实现了persisted函数来实现持久化，并且保持响应式。
```tsx

const [store, setStore, _, ready] = persisted(
      Persist.global("server", ["server.v3"]),
      createStore({
        list: [] as StoredServer[],
        projects: {} as Record<string, StoredProject[]>,
        lastProject: {} as Record<string, string>,
      }),
    )

```
packages\app\src\utils\persist.ts的persisted方法，可以看到它接受一个泛型参数
```tsx
export function persisted<T>(
  target: string | PersistTarget,
  store: [Store<T>, SetStoreFunction<T>],
): PersistedWithReady<T> {
  //一般来说如果在js中是useXXX开头的函数，它一般返回的就是整个应用共享的，存储在内存中的数据，比如说用户的偏好设置等等
  //可以推断出usePlatform返回的就是当前应用运行在什么平台上
  const platform = usePlatform()
  /**
   * type PersistTarget = {
  storage?: string
  key: string
  legacy?: string[]
  migrate?: (value: unknown) => unknown
  }
   */
  const config: PersistTarget = typeof target === "string" ? { key: target } : target
  //这里的stroe[0]就是前面调用时传入的createStore返回的数组的第一个元素
  //snapshot对其进行深拷贝，这样更改不影响源，但是一般也是用setStore来更改
  const defaults = snapshot(store[0])
  const legacy = config.legacy ?? []
  //platform.storage的定义：storage?: (name?: string) => SyncStorage | AsyncStorage
  //这里要说一下js或者说ts当中对于函数的保存，storage中保存的是函数，而不是一个变量，？表示storage是可选项，没有也可以==》推断出可能opencode有的平台并没有持久化函数
  //!!platform.storage表示当前平台有SyncStorage（同步存储）或者AsyncStorage（异步存储）
  const isDesktop = platform.platform === "desktop" && !!platform.storage
  //()()：立即执行函数，因为没有函数名，所以只会被调用一次
  //获取当前的存储函数
  const currentStorage = (() => {
    if (isDesktop) return platform.storage?.(config.storage)
    if (!config.storage) return localStorageDirect()
    return localStorageWithPrefix(config.storage)
  })()
  //读取旧版持久化数据时使用的存储。后面读取当前数据失败时，它会从这里尝试查找旧 key，并把找到的数据迁移到当前存储中
  const legacyStorage = (() => {
    if (!isDesktop) return localStorageDirect()
    if (!config.storage) return platform.storage?.()
    return platform.storage?.(LEGACY_STORAGE)
  })()
  //立即执行函数，创建一个异步存储api，如果是桌面端的话，否则创建同步存储
  const storage = (() => {
    if (!isDesktop) {
      const current = currentStorage as SyncStorage
      const legacyStore = legacyStorage as SyncStorage

      const api: SyncStorage = {
        getItem: (key) => {
          const raw = current.getItem(key)
          if (raw !== null) {
            const next = normalize(defaults, raw, config.migrate)
            if (next === undefined) {
              current.removeItem(key)
              return null
            }
            if (raw !== next) current.setItem(key, next)
            return next
          }

          for (const legacyKey of legacy) {
            const legacyRaw = legacyStore.getItem(legacyKey)
            if (legacyRaw === null) continue

            const next = normalize(defaults, legacyRaw, config.migrate)
            if (next === undefined) {
              legacyStore.removeItem(legacyKey)
              continue
            }
            current.setItem(key, next)
            legacyStore.removeItem(legacyKey)
            return next
          }

          return null
        },
        setItem: (key, value) => {
          current.setItem(key, value)
        },
        removeItem: (key) => {
          current.removeItem(key)
        },
      }

      return api
    }

    const current = currentStorage as AsyncStorage
    const legacyStore = legacyStorage as AsyncStorage | undefined

    const api: AsyncStorage = {
      getItem: async (key) => {
        const raw = await current.getItem(key)
        if (raw !== null) {
          const next = normalize(defaults, raw, config.migrate)
          if (next === undefined) {
            await current.removeItem(key).catch(() => undefined)
            return null
          }
          if (raw !== next) await current.setItem(key, next)
          return next
        }

        if (!legacyStore) return null

        for (const legacyKey of legacy) {
          const legacyRaw = await legacyStore.getItem(legacyKey)
          if (legacyRaw === null) continue

          const next = normalize(defaults, legacyRaw, config.migrate)
          if (next === undefined) {
            await legacyStore.removeItem(legacyKey).catch(() => undefined)
            continue
          }
          await current.setItem(key, next)
          await legacyStore.removeItem(legacyKey)
          return next
        }

        return null
      },
      setItem: async (key, value) => {
        await current.setItem(key, value)
      },
      removeItem: async (key) => {
        await current.removeItem(key)
      },
    }

    return api
  })()
  //通过makePersisted从磁盘中加载之前存储的数据，创建持久化对象，并解构出响应式对象，持久化函数，初始化函数（异步加载完成的信号）
  //解构是js中快速通过名字或者元素顺序获取某一个属性的方法
  //如果使用结构，这里就需要先接收整体的对象a，然后通过a.xxx的形式获取想要使用的属性
  //通过setState保存的数据不仅会在内存中，而且会持久化到磁盘中
  const [state, setState, init] = makePersisted(store, { name: config.key, storage })
  //Promise是JS中实现异步函数的一种方式（三种状态：pending（执行中），resolved/fulfilled（执行成功），rejected（执行失败）），咋说，反正就是判断init是不是一个异步函数
  //如果是异步存储，那么数据在存储时是异步的，当磁盘数据异步加载到内存之后，init会转变为rejected或者resolved状态从而触发不同的回调函数，我们可以在不同的回调函数中对这两种状态进行处理或者监听
  const isAsync = init instanceof Promise

  //createResource是solid-js创建资源的一个api，
  // () => init是资源，
  /**
   * async (initValue) => {
      if (initValue instanceof Promise) await initValue
      return true
    }
    是资源加载函数，加载资源的时候执行
   */
  //{ initialValue: !isAsync }则是资源的初始值
  //那createResource返回一个数组，然后这里取了数组的第一个元素并命名为ready，通过ready()可以获取到这个资源的值
  const [ready] = createResource(
    () => init,
    async (initValue) => {
      if (initValue instanceof Promise) await initValue
      return true
    },
    { initialValue: !isAsync },
  )

  return [state, setState, init, () => ready() === true]
}
```
最后解构出来state-->store,setState-->setStore,init-->_,() => ready() === true-->ready

 `Persist.global("server", ["server.v3"])` 为例，**保存位置取决于运行环境**：

- **浏览器 / Web**：保存到 `localStorage`。存储键是 `opencode.global.dat:server`，值是 JSON 字符串。
- **桌面版**：通过平台提供的 storage 接口保存，不走浏览器 `localStorage`。Tauri 使用名为 `opencode.global.dat` 的 store；Electron 则通过 `electron-store` 管理存储。应用代码用同一套接口读写，具体文件位置由桌面端存储实现决定。


opencode客户端会监听客户端连接，如果我们添加服务器成功了之后，后续的请求就会发送到新加的这个服务器上，所以如果当前这个服务器某些接口没有实现可能会触发未知的错误。



