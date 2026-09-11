---
id: reapi-settings
title: 设置
sidebar_position: 3
description: ReAPI 是一个 AMXModX 模块，为 ReHLDS、ReGameDLL 以及 Metamod 插件（例如 ReUnion、ReVoice）提供 API。
slug: /reapi/settings
---

<head>
  <title>ReAPI: 设置 | ReHLDS</title>
</head>

# 设置

ReAPI 没有自己的服务器控制台变量——它是一套脚本 API，而不是面向最终用户的插件。所谓「配置」ReAPI，指的是在 Pawn 代码中正确使用它的原生函数。本页介绍这些基本组成部分。

## 头文件

| 头文件 | 提供的内容 |
| --- | --- |
| `reapi.inc` | 模块核心：钩子链原生函数、成员访问宏、能力检测。包含这一个即可，它会引入其余头文件。 |
| `reapi_engine.inc` / `reapi_engine_const.inc` | 引擎层面（ReHLDS）可挂接的函数及其常量。 |
| `reapi_gamedll.inc` / `reapi_gamedll_const.inc` | GameDLL 层面（ReGameDLL_CS）可挂接的函数及其常量。仅在运行 ReGameDLL_CS 时可用。 |
| `cssdk_const.inc` | 上述头文件共用的 Counter-Strike SDK 常量。 |
| `reapi_reunion.inc` | 当 [ReUnion](/zh-Hans/docs/reunion) 已安装时，提供对应的钩子。 |
| `reapi_vtc.inc` | 当 VTC 反作弊集成已安装时，提供对应的钩子。 |
| `reapi_rechecker.inc` | 当 [ReChecker](/zh-Hans/docs/rechecker) 已安装时，提供对应的钩子。 |

`reapi.inc` 会自动包含以上全部内容——其中 `reapi_engine.inc` 只有配合 ReHLDS 才有意义，`reapi_gamedll.inc` 则只有配合 ReGameDLL_CS 才有意义。

## 钩子链

钩子链让你的插件能够介入引擎或 GameDLL 的函数调用。

```pawn
native HookChain:RegisterHookChain(ReAPIFunc:function_id, const callback[], post = 0);
native bool:DisableHookChain(HookChain:hook);
native bool:EnableHookChain(HookChain:hook);
native SetHookChainReturn(AType:type, any:...);
native any:GetHookChainReturn(AType:type, any:...);
native SetHookChainArg(number, AType:type, any:...);
native bool:IsReapiHookOriginalWasCalled(ReAPIFunc:function_id);
native HookChain:GetCurrentHookChainHandle();
```

`function_id` 是在 `reapi_engine_const.inc`（引擎函数）或 `reapi_gamedll_const.inc`（GameDLL 函数）中声明的 `RG_*` 常量之一——完整且带版本的可挂接函数列表及其回调签名，请查阅这两个头文件。

### 钩子链的返回值

从回调中返回以下值之一，以决定后续行为：

| 常量 | 作用 |
| --- | --- |
| `HC_CONTINUE` | 插件未做任何处理；照常继续执行。 |
| `HC_SUPERCEDE` | 跳过真正的函数，改用通过 `SetHookChainReturn` 设置的返回值。 |
| `HC_BREAK` | 跳过其余全部转发**以及**真正的函数，使用已设置的返回值。它会跳过后续所有 AMXX 插件的钩子——请谨慎使用。 |
| `HC_BYPASS` | 跳过后续所有 AMXX 插件的调用，但仍然调用原函数。在 `pre` 阶段使用时，还会跳过 `post` 转发。 |

### 参数与返回值类型

`SetHookChainReturn`、`GetHookChainReturn` 和 `SetHookChainArg` 都接受一个 `AType:` 值，用于说明如何解释其后的参数：

```pawn
enum AType
{
	ATYPE_INTEGER = 0,
	ATYPE_FLOAT,
	ATYPE_STRING,
	ATYPE_CLASSPTR,
	ATYPE_EDICT,
	ATYPE_EVARS,
	ATYPE_BOOL,
	ATYPE_VECTOR,
	ATYPE_TRACE
};
```

## 成员访问

按名称读写内部结构体成员（玩家、武器、手雷、游戏规则等），而不必手工计算偏移：

```pawn
set_member(entity, m_iSomeMember, value);
value = get_member(entity, m_iSomeMember);
```

默认情况下，`set_member`/`get_member` 会解析为带边界检查的 `set_member_s`/`get_member_s`。如果你需要不做检查、速度略快的版本，并且清楚其中的风险，可以在 `#include <reapi>` 之前定义 `MEMBER_UNSAFE`。

## 运行时能力检测

用它们让插件适配实际运行的环境，而不是凭假设：

| 原生函数 | 返回 true 的条件 |
| --- | --- |
| `is_rehlds()` | 服务器运行在 ReHLDS 上。 |
| `is_regamedll()` | 服务器运行在 ReGameDLL_CS 上。 |
| `has_reunion()` | 已安装 ReUnion。 |
| `has_vtc()` | 已安装 VTC 反作弊集成。 |
| `has_rechecker()` | 已安装 ReChecker。 |

## 其他实用原生函数

| 原生函数 | 用途 |
| --- | --- |
| `bool:FClassnameIs(entityIndex, const className[])` | 检查实体的 classname，同时也会校验该实体是否有效。 |
| `WeaponIdType:GetGrenadeType(entityIndex)` | 返回实体对应的手雷类型。 |
| `engset_view(index, viewEntity)` / `get_viewent(index)` | 获取和设置玩家的视角实体。 |
| `bool:is_entity(entityIndex)` | 检查某个索引是否为有效实体。 |

要获取完整且最新的原生函数列表和可挂接函数的 ID，请以 `reapi.inc`、`reapi_engine_const.inc` 和 `reapi_gamedll_const.inc`（随插件一同安装在 `scripting/include` 中）为准——它们与你正在运行的模块文件是同版本发布的。
