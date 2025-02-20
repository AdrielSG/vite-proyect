# Viro-React API Adriel

Este proyecto se a realizado con react

## Instalación

## Requisitos previos

Node.js (versión 16 o superior)
npm (el gestor de paquetes)

Si no tienes node.js instalado, descargadalo [aqui(https://nodejs.org/)].


## Paso 1: Instalar dependecias

```bash
npm install
```

### Para iOS:

```bash
cd ios
pod install
cd ..
```

## Paso 2: Ejecutar Metro Server

Primero, deberá iniciar **Metro**, el _paquete_ de JavaScript que se incluye _con_ React Native.

Para iniciar Metro, ejecute el siguiente comando desde la _root_ de su proyecto React Native:

```bash
npm start
```

## Paso 3: Iniciar la aplicacion en el dispositivo 

> **Aviso**: 
Dado a las limitaciones del Simulador de Apple y el Emulador de Android, debes ejecutar tu proyecto en un dispositivo físico


```bash
# iOS
npx react-native run-ios
# Android
npx react-native run-android
```

Si todo se ejecuta correctamente, deberias ver la nueva app ejecutandose en tu dispositivo.

## Paso 4: Modificar la APP

Ahora que se esta ejecutando de manera correcta, ya puedes proceder a modificar la APP.