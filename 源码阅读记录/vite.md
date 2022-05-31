# Vite源码阅读记录

启动服务的逻辑：
执行vite命令: npx vite

``` js
bin/vite.js
  start()
    return import('../dist/node/cli.js')
node/cli.ts
  cli.options().... // dev环境
    createServer:  // 返回一个server对象
      resolveConfig: // 返回一个resolved对象，里面包含一堆配置
      const ws =  createWebSocketServer() // 创建ws
      const httpServer = resolveHttpServer() // 创建本地服务
      const watcher = {...} // 创建watcher对象 @todo 用来监听文件变化
      const container = await createPluginContainer() // 返回一个container 此container是关于rollup的插件，里面包含各种钩子函数 @todo
      const server = {httpServer} // 创建server对象

    server.listen() // 监听
      startServer()
        httpServerStart()
          return new Promise((resolve,reject) => {
            httpServer.listen(port, host, () => { // 这里的httpServer是server对象中的httpServer
              resolve(port)
            })
          })
        openBrowser() // 打开浏览器
```

resolveConfig解析配置过程：

``` js
  loadConfigFromFile // 根据配置文件不同的后缀名 加载配置文件
    bundleConfigFile // 使用esbuild得到打包后的config的code和dependency
    loadConfigFromBundledFile // 加载配置文件
  mergeConfig // 合并
  rawUserPlugins // 过滤插件 判断是否有apply属性
  resolvedWorkerOptions
  for p of userPlugins // 执行插件的config钩子，并merge
  resolvedRoot // 处理根的路径
  normalizeAlias 
    mergeAlias // 合并别名 
  const envDir = config.envDir // 加载env文件
  loadEnv // 加载用户不同模式下的env文件
  resolveBaseUrl // 处理baseUrl,公共基础路径
  const cacheDir = config.cacheDir // 处理缓存文件夹 node_modules/.vite
  const assetsFilter // 处理静态资源
  const createResolver // 这个函数是创建resolveId的函数
  resolved.worker.plugins = await resolvePlugins() // // 处理一堆plugin，真正要执行的plugins数组，包括用户传递进来的plugin
  // call configResolved worker plugins hooks 调用插件的configResolved钩子
  return resolved // 返回配置
```

createPluginContainer函数逻辑：此函数就是为了创建一个container用来保存插件不同时机的钩子

```js
  声明了一个Context类：这个PluginContext是rollup中的
  声明了一个TransformContext类
  声明了一个container，声明了hook的执行方式，在外部调用不同的hook会调用plugin对应hook的结果
  container = {
    options,
    buildStart,
    resolveId, // first non-null result is returned 只会返回第一个非空结果
    load,
    close
  }
```