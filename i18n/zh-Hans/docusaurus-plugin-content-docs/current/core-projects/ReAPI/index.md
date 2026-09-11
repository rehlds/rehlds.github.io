---
id: reapi
title: ReAPI
sidebar_position: 1
description: ReAPI 是一个 AMXModX 模块，为 ReHLDS、ReGameDLL 以及 Metamod 插件（例如 ReUnion、ReVoice）提供 API。
slug: /reapi
---

# 什么是 ReAPI？

ReAPI 是一个 AMX Mod X 模块，它把 [ReHLDS](/zh-Hans/docs/rehlds) 和 [ReGameDLL_CS](/zh-Hans/docs/regamedll-cs) 的内部实现以普通原生函数的形式开放给 Pawn 插件，而不必让插件作者自己去修补内存偏移或逆向结构体。它让 Pawn 代码得以安全、带版本地访问引擎与 GameDLL 的行为——这些是原版 AMX Mod X 和 Metamod 触及不到的。

## 它能提供什么

- **钩子链**——在 `pre` 和 `post` 两个时机拦截引擎（ReHLDS）和 GameDLL（ReGameDLL_CS）的函数调用，并可精细控制返回值，甚至原函数的参数。
- **结构体成员访问**——按名称读写引擎和 GameDLL 内部结构体的成员（玩家、武器、手雷、游戏规则等），而不必手工计算偏移。
- **运行时能力检测**——`is_rehlds()`、`is_regamedll()`、`has_reunion()`、`has_vtc()`、`has_rechecker()` 等原生函数，让插件根据实际运行的环境自行调整。
- **可选的集成头文件**——当 [ReUnion](/zh-Hans/docs/reunion)、VTC 反作弊和 [ReChecker](/zh-Hans/docs/rechecker) 已安装时，`reapi_reunion.inc`、`reapi_vtc.inc` 和 `reapi_rechecker.inc` 会开放对应的钩子。

## 环境要求一览

- AMX Mod X，运行在 Metamod-R（或 Metamod）和 [ReHLDS](/zh-Hans/docs/rehlds/install) 之上。引擎层面的钩子和成员需要 ReHLDS。
- 如果你的插件用到 GameDLL 层面的钩子或成员（`reapi_gamedll.inc`），还需要 [ReGameDLL_CS](/zh-Hans/docs/regamedll-cs/install)。纯引擎层面的插件没有它也能运行。

具体的安装步骤见[安装](./installing.md)。

## 一个最小示例

```pawn
#include <amxmodx>
#include <reapi>

public plugin_init()
{
	register_plugin("ReAPI Test", "1.0", "s1lent");
	RegisterHookChain(RG_CBasePlayer_GiveAmmo, "CBasePlayer_GiveAmmo");
}

public CBasePlayer_GiveAmmo(const this, iAmount, szName[], iMax)
{
	server_print("-> CBasePlayer_GiveAmmo: index:(%d), amount:(%d), name:(%s), max:(%d)", this, iAmount, szName, iMax);
	return HC_CONTINUE;
}
```

这段代码在 GameDLL 一侧挂接 `CBasePlayer::GiveAmmo`，把每次调用记入日志而不改变行为（`HC_CONTINUE`）。完整的钩子链 API 以及可用的返回值和参数类型，见[设置](./settings.md)。

## 接下来看什么

- [安装](./installing.md)——安装模块并在你的插件中启用它。
- [设置](./settings.md)——钩子链与成员访问 API，以及你实际会调用的原生函数。
- [构建说明](./compilling.md)——从源代码构建 ReAPI。
- [致谢](./credits.md)——许可证与项目链接。
