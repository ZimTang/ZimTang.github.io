## webpack命令启动原理

执行./bin/webpack.js文件：

1. 定义cli对象，判断是否安装，如果没有安装，会提示你进行安装
2. 执行runCli函数


runCli函数执行过程：

1. 去找webpack-cli/package.json
2. 引入webpack-cli/bin/cli.js文件