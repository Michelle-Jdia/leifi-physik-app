# Native App

## Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or higher)
- [npm](https://www.npmjs.com/) (v9 or higher)
- [Android Studio](https://developer.android.com/studio) (for Android development)
- [Xcode](https://developer.apple.com/xcode/) (for iOS development)
- [Capacitor](https://capacitorjs.com/docs/getting-started/dependencies) (v5 or higher)
- [Ionic CLI](https://ionicframework.com/docs/intro/cli) (v6 or higher)
- [CocoaPods](https://cocoapods.org/) (for iOS development, v1.10.1 or higher)
- [Gradle](https://gradle.org/) (for Android development, v8.0.2)
- JAVA JDK v17 (v18 has conflict with Gradle 8.0.2). Recommended: [SDKMan](https://sdkman.io/) 

## Setup

1. Install dependencies and prepare build

```bash
npm run sync:test
```

2. Open Android Studio or XCode

3. Create a new emulator or connect a device (see `Tools > Device manager`)
   - If you are using a physical device, make sure to enable USB debugging (needs developer mode)
   - If you are using an emulator, make sure to enable Google Play Services

3. Build the native app from the IDE
   - Android: `Run > Run 'app'`
   - iOS: `Product > Build`

## Troubleshooting

### Android

- If you get an error about `ANDROID_SDK_ROOT`, you need to set the environment variable to the path to your Android SDK. For example:

```bash
export ANDROID_SDK_ROOT=/Users/username/Library/Android/sdk
```

- If you get an error about `ANDROID_HOME`, you need to set the environment variable to the path to your Android SDK. For example:

```bash
export ANDROID_HOME=/Users/username/Library/Android/sdk
```

- If you get an error about `JAVA_HOME`, you need to set the environment variable to the path to your Java SDK. For example:

```bash
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_291.jdk/Contents/Home
```

- If you get the error `Could not resolve com.android.tools.build:gradle:8.0.2`, it can mean both that current gradle version isn't 8.0.2 (although this should be in the git repository), or more likely that the Java JDK is not v17. See `File > Settings > Build, Execution, Deployment > Build Tools > Gradle > Gradle JDK` in Android Studio. Gradle JDK and Java JDK seem to be tighly coupled, make sure the versions match if you upgraded from the versions listed here (and update here once you find the working versions).

### iOS

- If you get an error about `CocoaPods`, you need to install it. For example:

```bash
sudo gem install cocoapods
```
