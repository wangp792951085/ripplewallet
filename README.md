# Ripple Wallet (A Desktop Client for Ripple)

Wallet allows you to encrypt your mnemonic/secret key and store it as a file locally on your computer. You can use it on Windows, Linux and Mac.

## Key Features

- No registration. Secret key and login information stored locally.
- Offline transaction signing. Protect the secret key from exposure to the Internet.
- Send/receive/convert ripples, assets and tokens.
- Buy/sell ripples, assets and tokens.
- Manage trust lines, account data.
- View balances and history.

## Build

You should have Node.js installed. If not, install it ([Node version manager](https://github.com/creationix/nvm) is recommended).

- Run `npm install` to prepare.
- Run `npm start` to develop.
- Run `npm run dist` to build. You can use `npm run mac`, `npm run win` or `npm run linux` to build application according your system.

You may notice that the packages also include [ripplelib](https://github.com/ripplerm/ripplelib) (a fork from ripple-lib-0.12, written by ripplerm). We just use ripplelib to parse the transactions. The ripplelib.Amount class is quite powerful.

# 瑞波钱包

瑞波钱包是一个去中心化的瑞波钱包。它是一个注重安全的，功能完备的瑞波客户端。它不存储任何用户信息（密码、私钥等），用户自己为安全负责，完全掌握自己的数字资产。


## 为什么需要这个钱包？

- 人民需要什么样的钱包，我们就写什么样的钱包。
- 强大的交易、兑换、发送、管理功能。
- 更安全的备份支持。
- 用最新的开发包，本地签名后再与瑞波网络交互。
- 连接最快的服务器，优化中国区的访问。
- 根据网关多年的经验，更好地服务用户。

## 开发和运行

先安装Node.js。没有安装的话，开发人员推荐使用[Node version manager](https://github.com/creationix/nvm)。

- 安装各种依赖包 `npm install`。
- 开发运行 `nw start`。在nwjs控制台运行 `nw.Window.get().reload()` 即可刷新改动。
- 编译运行 `npm run dist`。也可单独运行 `npm run mac`，`npm run win` 或`npm run linux`来编译对应系统的可执行文件。

注意，我们也引用了[ripplelib](https://github.com/ripplerm/ripplelib)开发包。ripplelib本质上是ripple-lib 0.12版本，由ripplerm改进。我们主要使用这个包的Amount类来复用历史解析代码。与瑞波网络的交互依然使用最新的ripple-lib。
