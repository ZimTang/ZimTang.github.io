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
        loadConfigFromFile // 加载配置文件
        mergeConfig // 合并
        rawUserPlugins // 过滤插件
        resolvedWorkerOptions // webworker
        for p of userPlugins // 执行插件钩子
        resolvedRoot // 处理根的路径
        normalizeAlias 
          mergeAlias // 合并别名 
        const envDir = config.envDir // 加载env文件
        loadEnv // 加载用户不同模式下的env文件
        resolveBaseUrl // 处理baseUrl,公共基础路径
        const cacheDir = config.cacheDir // 处理缓存文件夹 node_modules/.vite
        ...
      const ws =  createWebSocketServer() // 创建ws
      const httpServer = resolveHttpServer() // 创建本地服务
      const watcher = {...} // 创建watcher对象 @todo
      const container = await createPluginContainer() // 返回一个container 此container是关于rollup的插件，里面包含各种钩子函数
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