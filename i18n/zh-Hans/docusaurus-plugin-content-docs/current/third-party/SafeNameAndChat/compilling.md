---
id: safenameandchat-compilling
title: 构建说明
sidebar_position: 4
description: SafeNameAndChat 是第三方 Metamod 插件，用于化解玩家昵称和聊天消息中的本地化字符串与命令注入漏洞。
slug: /safenameandchat/compilling
---

<head>
  <title>SafeNameAndChat: 构建说明 | ReHLDS</title>
</head>

# 构建说明

大多数服务器管理员使用[发行版构建](https://github.com/WPMGPRoSToTeMa/SafeNameAndChat/releases)即可。只有在你要验证尚未发布的改动，或者需要定制构建时，才需要从源代码编译。插件所需的 HLSDK 头文件已内置在 `hlsdk/` 目录中。

### 检查前置条件

**Windows**

- Visual Studio 2015（C++14 标准）或更新版本

**Linux**

- Git 1.8.5 或更新版本
- CMake 3.10 或更新版本
- 以下编译器之一：GCC 4.9.2+、ICC 15.0.1 20141023+ 或 Clang（LLVM）6.0+

### 克隆仓库

```bash
git clone https://github.com/WPMGPRoSToTeMa/SafeNameAndChat.git
cd SafeNameAndChat
```

### 在 Windows 上构建

在 Visual Studio 中打开 `SafeNameAndChat.sln`，从解决方案配置中选择 `Release`（或 `Debug`），平台选择 **x86**，然后开始构建。

### 在 Linux 上构建

使用随附的 `build.sh` 脚本：

```bash
./build.sh --compiler=[gcc|icc|clang] --jobs=[N]
```

例如：

```bash
./build.sh --compiler=gcc --jobs=4    # GCC
./build.sh --compiler=intel           # ICC
./build.sh --compiler=clang           # Clang / LLVM
```

也可以通过 `build.sh` 以 `-D<选项>=[ON|OFF]` 的形式传递 CMake 定义：

| 定义 | 作用 |
| --- | --- |
| `DEBUG` | 启用调试模式。 |
| `USE_STATIC_LIBSTDC` | 静态链接 `libstdc++`。 |

#### 检查构建环境（Debian / Ubuntu）

```bash
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install -y gcc-multilib g++-multilib
sudo apt-get install -y build-essential
sudo apt-get install -y libc6-dev libc6-dev-i386
```

然后选择一个编译器：

```bash
sudo apt-get install -y gcc g++
# 或者
sudo apt-get install -y clang
```

### 构建产物

构建会在 Linux 上生成 `SafeNameAndChat.so`，在 Windows 上生成 `SafeNameAndChat.dll`。关于它们在服务器上的存放位置，见[安装](./installing.md)；别忘了把 `SafeNameAndChat.cfg` 复制到旁边——插件会在自身所在目录查找配置文件。
