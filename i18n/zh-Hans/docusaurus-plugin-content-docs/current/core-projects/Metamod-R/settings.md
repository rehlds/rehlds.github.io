---
id: metamod-r-settings
title: 设置
sidebar_position: 3
description: Metamod-R 是原版 Metamod 的优化版本，为 Half-Life 1 服务器提升性能与兼容性。
slug: /metamod-r/settings
---

<head>
  <title>Metamod-R: 设置 | ReHLDS</title>
</head>

# 设置

## 在 plugins.ini 中挂载插件
这里以一个虚构的插件 `metaPlugin` 为例。其他插件的安装方式相同。
 
* 在 `addons\metamod` 目录中创建 `plugins.ini` 文件（如果该文件尚不存在）
* 在 `addons` 目录中为新插件创建一个目录。_例如 **meta Plugin** 目录。_
* * 把插件 `metaPlugin.dll`（或 `meta Plugin.so`）放入刚创建的 `addons\metamod\metaplugins` 目录。
* 用任意文本编辑器打开 `metamod` 目录中的 `plugins.ini` 文件。
* * 要挂载插件 `metaPlugin.dll`（或 `meta Plugin.so`），请在 `plugins file.ini` 中写入以下内容：

_Windows 版服务器：_
```
win32 addons\metaPlugin\metaPlugin.dll
```
_Linux 版服务器：_
```
linux addons/metaPlugin/metaPlugin.so
```
* 保存 `plugins.ini` 并启动服务器。
* 安装**完成**。

_可以在服务器控制台执行 `meta list` 命令来检查插件是否正常工作。_
![](https://i.imgur.com/1fVXBzc.png)

如果结果不正常：
![](https://i.imgur.com/nGXAokG.png)
请参阅 [Troubbleshouting](https://github.com/rehlds/metamod-r/wiki/Troubbleshouting)。

# 控制台命令列表
命令需以 `meta` 开头书写。_例如 `meta version`。_

```
     version                - 显示 metamod 的版本信息
     list                   - 显示已加载插件的列表
     game                   - 显示 gamedll 的信息（已注册 msg 的列表、id 和大小）
     cmds                   - 由第三方插件添加的控制台命令列表
     cvars                  - 由第三方插件添加的控制台变量列表
     refresh                - 重新加载 metamod-r
     config                 - 显示来自 config.ini 的配置
     load <name>            - 按指定路径查找并加载插件
     unload <plugin>        - 卸载指定的插件
     reload <plugin>        - 重新加载指定的插件
     info <plugin>          - 显示指定插件的详细信息
     pause <plugin>         - 暂停插件的运行
     unpause <plugin>       - 恢复所有已暂停插件的运行
     retry <plugin>         - 重试加载失败的插件
     clear <plugin>         - 把加载失败的插件从内存中卸载
     force_unload <plugin>  - 强制卸载插件
     require <plugin>       - 若指定插件未运行，则关闭服务器
```

### debuglevel 
 
| **变量** | debuglevel 
| :----- | -----:
| **类型** | int
| **取值** | 0 到 42
| **默认值** | 0
| **可覆盖方式** |  `+localinfo mm_debug <数值>`
| **示例** | `debuglevel 0`
| **说明** | 设置 metamod 的初始调试级别（与控制台变量 "meta_debug" 等价）。其中 `<数值>` 为 0 及以上的整数。默认通常为 0。若 hlds 以 "-dev" 启动，则默认为 3。

### gamedll
| **变量** | gamedll
| :----- | -----:
| **类型** | string
| **取值** | `<路径>`
| **默认值** | null
| **可覆盖方式** |  `+localinfo mm_gamedll <路径>`
| **示例** |  `gamedll dlls/hl.dll`、`gamedll ../podbot/podbot.dll`、`gamedll /home/bots/dlls/mybot.dll`
| **说明** | 覆盖自动检测到的 gamedll，主要用于机器人。其中 `<路径>` 为绝对路径，或相对于游戏目录的路径。默认为空，此时会根据游戏目录自动识别 gamedll。

### exec_cfg 
| **变量** | exec_cfg 
| :----- | -----:
| **Тип** | string
| **类型** | `<文件>`
| **默认值** | `addons/metamod/exec.cfg`
| **可覆盖方式** |  `+localinfo mm_execcfg <文件>`
| **示例** |  `exec_cfg configs/debugging.cfg`、`exec_cfg ../clan/match.cfg`
| **说明** | 覆盖默认的文件名，该文件包含在 Metamod 加载完毕后立即执行的 hlds 命令。其中 `<文件>` 是相对于游戏目录的路径。注意！这里不能使用绝对路径，因为 hlds 不会对绝对路径执行 "exec"。
 
### clientmeta 
| **变量** | clientmeta 
| :----- | -----:
| **类型** | bool
| **取值** | `<yes/no>`
| **默认值** | `yes`
| **可覆盖方式** |  `+localinfo mm_clientmeta <yes/no>`
| **示例** |  `clientmeta yes`、`clientmeta no`
| **说明** | 用于关闭或开启 Metamod 的客户端命令（'meta list' 和 'meta version'）。这是 "Metamod+All-Mod-Support Patch" 的附加设置。

### dynalign_list
| **变量** | clientmeta 
| :----- | -----:
| **类型** | bool
| **取值** | `<yes/no>`
| **默认值** | `no`
| **可覆盖方式** |   
| **示例** |  `dynalign_list yes`、`dynalign_list no`
| **说明** | 用于关闭或开启插件列表输出时的动态对齐。**注意**：该选项会影响 HLSW 在 `Metamod Plugins` 标签页中的解析，可能导致解析错误。
