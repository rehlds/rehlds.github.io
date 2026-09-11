---
id: safenameandchat-compilling
title: Instrucciones de compilación
sidebar_position: 4
description: SafeNameAndChat es un plugin de Metamod de terceros que neutraliza los exploits de cadenas de localización e inyección de comandos en los nombres de jugador y los mensajes de chat.
slug: /safenameandchat/compilling
---

<head>
  <title>SafeNameAndChat: Instrucciones de compilación | ReHLDS</title>
</head>

# Instrucciones de compilación

A la mayoría de administradores les basta con una [versión ya compilada](https://github.com/WPMGPRoSToTeMa/SafeNameAndChat/releases). Compila desde el código fuente si estás probando un cambio aún no publicado o necesitas una compilación propia. Las cabeceras del HLSDK que necesita el plugin vienen incluidas en `hlsdk/`.

### Requisitos previos

**Windows**

- Visual Studio 2015 (estándar C++14) o posterior

**Linux**

- Git 1.8.5 o posterior
- CMake 3.10 o posterior
- Uno de estos compiladores: GCC 4.9.2+, ICC 15.0.1 20141023+ o Clang (LLVM) 6.0+

### Clonar el repositorio

```bash
git clone https://github.com/WPMGPRoSToTeMa/SafeNameAndChat.git
cd SafeNameAndChat
```

### Compilar en Windows

Abre `SafeNameAndChat.sln` en Visual Studio, selecciona `Release` (o `Debug`) entre las configuraciones de la solución y la plataforma **x86**, y compila.

### Compilar en Linux

Usa el script `build.sh` incluido:

```bash
./build.sh --compiler=[gcc|icc|clang] --jobs=[N]
```

Por ejemplo:

```bash
./build.sh --compiler=gcc --jobs=4    # GCC
./build.sh --compiler=intel           # ICC
./build.sh --compiler=clang           # Clang / LLVM
```

También puedes pasar definiciones de CMake a través de `build.sh` con `-D<opción>=[ON|OFF]`:

| Definición | Efecto |
| --- | --- |
| `DEBUG` | Activa el modo de depuración. |
| `USE_STATIC_LIBSTDC` | Enlaza `libstdc++` de forma estática. |

#### Comprobar el entorno de compilación (Debian / Ubuntu)

```bash
sudo dpkg --add-architecture i386
sudo apt-get update
sudo apt-get install -y gcc-multilib g++-multilib
sudo apt-get install -y build-essential
sudo apt-get install -y libc6-dev libc6-dev-i386
```

Después elige un compilador:

```bash
sudo apt-get install -y gcc g++
# o bien
sudo apt-get install -y clang
```

### Resultado de la compilación

La compilación genera `SafeNameAndChat.so` en Linux y `SafeNameAndChat.dll` en Windows. En [Instalación](./installing.md) se indica dónde va cada uno en el servidor; no olvides copiar `SafeNameAndChat.cfg` junto al binario, ya que el plugin busca la configuración en su propio directorio.
