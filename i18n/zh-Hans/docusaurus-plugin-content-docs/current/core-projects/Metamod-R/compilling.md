---
id: metamod-r-compilling
title: 构建说明
sidebar_position: 5
description: Metamod-R 是原版 Metamod 的优化版本，为 Half-Life 1 服务器提升性能与兼容性。
slug: /metamod-r/compilling
---

<head>
  <title>Metamod-R: 构建说明 | ReHLDS</title>
</head>

# 构建说明

### 检查前置条件
构建 Metamod-r 需要若干软件：

#### Windows
<pre>
Visual Studio 2015（C++14 标准）及更新版本
</pre>

#### Linux
<pre>
git >= 1.8.5
cmake >= 3.10
GCC >= 4.9.2（可选）
ICC >= 15.0.1 20141023（可选）
LLVM (Clang) >= 6.0（可选）
</pre>

### 构建

#### Windows
使用 `Visual Studio` 构建：打开 `msvc/metamod.sln`，在解决方案配置列表中选择 `Release` 或 `Debug` 即可

#### Linux

* 可选参数的用法为 `build.sh --compiler=[gcc] --jobs=[N] -D[option]=[ON or OFF]`（不含方括号）

<pre>
-c=|--compiler=[icc|gcc|clang]  - 选择用于构建的 C/C++ 编译器
-j=|--jobs=[N]                  - 指定同时运行的任务（命令）数量，以加快构建

<sub>定义（-D）</sub>
DEBUG                           - 启用调试模式
USE_STATIC_LIBSTDC              - 静态链接 libstdc++ 库
</pre>

* ICC          <pre>./build.sh --compiler=intel</pre>
* LLVM (Clang) <pre>./build.sh --compiler=clang</pre>
* GCC          <pre>./build.sh --compiler=gcc</pre>

##### 检查构建环境（Debian / Ubuntu）

<details>
<summary>点击展开</summary>

<ul>
<li>
安装所需的软件包
<pre>
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install -y gcc-multilib g++-multilib
sudo apt-get install -y build-essential
sudo apt-get install -y libc6-dev libc6-dev-i386
</pre>
</li>

<li>
选择并安装偏好的 C/C++ 编译器
<pre>
1) sudo apt-get install -y gcc g++
2) sudo apt-get install -y clang
</pre>
</li>
</ul>

</details>
