# [PhotoBack.app](PhotoBack.app)

![Alt text](assets/images/PhotobackLogo/PhotoBackLogo.png)

> [!NOTE]
> This is a early "works on my phone" stage and thus have only been tested on my iPhone 13 mini running iOS 17.1.2

## What is this?

PhotoBackApp is intended to help you organize, collect and take control of your memories (photos primarily) in a way that is easy, secure and private and not dependent on any cloud service.

- This is the native phone app that just authenticates and uploads to the agent on your mac/linux box (I don't have a windows box, and it doesn't sport FuseFS so it's not a priority)

## The app should support these ideas:

- Passwordless authentication between app and computer
- Background uploading of photos
- Uploads should be resumable
- Uploads should be encrypted
- The app should get out of your way

## The matching server and electron app should support these ideas:

- Found images from old backups should be able to drop on electron app or folder and be organized automatically
- Duplicates should be marked and be able to filter out
- Multiple sizes or crops of same image should be kept together and have their metadata sanitized (all dates, camera info, location info and such should be the same)
- Photos should be organized by date primarily
- **All metadata should be kept in the files as exif data, no proprietary database other than as a cache or intermediary.**
- The user should be able to browse key metadata features such as location, date, and people by generated folders that are being served to the filesystem using FuseFS
- Should easily support backing up to 3rd party services keeping all metadata intact (dates, exif et.c.)

## Architecture 10 000 feet overview

![Architecture OverView](assets/images/Overview.png)

- Phone app is a React Native app
- Computer app is an Electron app with sidecar agent
- Phone finds computer using MDNS/Bonjour
- Phone retrieves JWT from computer using scanned QR code
- Phone uploads photos to computer using Tus.io protocol
- Agent stores photos in a folder structure with dates
- Agent serves photos to filesystem using FuseFS
- Electron App can be user to do organizational changes or apply machine learning models. Changes are applied to the photos and their metadata is updated
- Agent can backup photos to 3rd party services continously
- Use filesystem native tools such as Searching, Viewing, previewing and navigating. (Finder is our main UI)

## Status

> Exploratory phase, can this even be done?

### Left to explore:

- How to do background uploading of photos, can we background process photo uploads? What about time limits? How to debug? What happens when not on the same network?
- How to store complex metadata not previously defined in exif data, such as people, events, places, tags, etc.?
- How to find events based on time and location? (multiple photos taken at same time and location)
- How to find people based on facial recognition? (multiple photos of same person)
- How to get desktop app or FuseFS performant with exif being primary data store
- How to enable on-the-go background uploads of photos without having to have a relay server (TUN/STUN/TURN-thingie)
- How to UX-handle multiple croppings and sizes of same image

### Proven elsewhere:

- Authentication has been proven elsewhere, in old non-ignite repo with sagas but not yet ported over
- Exif data editing has been proven elsewhere
- Exif storage for dates, camera info, location info and such has been proven elsewhere
- Resumable uploads have been proven with [Tus.io](https://tus.io/)
- FuseFS was proven with Ruby back in university days, but not yet ported over

### What's been tried but failed?

- Tried building server using Rails - hard to package and distribute easily
- Tried building server using React Native Mac, Blockers:
  - no file system access 😭, and I don't think I have the stamina to learn to write that module 😫
  - no expo support 😭

## Why create this?

1. Over the years I've used multiple solutions but always ended up with random CD's, hard drives et.c. of unorganized or stale organized files. If I've used a bespoke service (Such as Flickr, Apple iPhoto/Photos, Google Photos, Picasa et.c.) I can never get at my actual files without moving them out of their context. I want to edit my files in place and have them retain dates and any organizational changes I make to them. I want to be able to script changes if necessary and use any software I need.
2. I also don't want to be locked to a certain vendor. That's why I'm sticking to files and folders with file metadata being my primary database.
3. I want to practice my skills building apps and explore new areas (Fuse, Exif, Electron, Zeroconf, Background processing, Tus.io, Image ML, etc.)
4. If I ever only achieve uploads that will be a huge win for me!

## Priorities

1. Get local network communication working
2. Get authentication working
3. Get uploads working
4. Get library auto-organizing working
5. Get duplication/crop co-location sorting working
6. Distribute opensource and on app store
7. The rest

## Short Term TODO:

- [x] Tie in photo library permissions to PhotoPermissionScreen
- [x] Tie in camera permissions to CameraAccessScreen
- [x] Make onboarding screens appear on start depending on how far you've come
- [ ] Tie in QR code scanner to LoginScreen
- [ ] Copy over server discovery from previous app version
- [ ] Copy over server connection and authentication from previous app version
- [ ] Create data model for servers
- [ ] Create data model for sessions
- [ ] Create data model for photo upload status
- [ ] Create dashboard screen
- [ ] Upload to server with Tus.io-based upload
- [ ] Add splash screen
- [ ] Add app icon
- [ ] Create landing page web site
- [ ] Distribute

## Android Bugs:

- [ ] PhotoPermissionScreen: App does not detect that permission has been granted

# Welcome to your new ignited app!

![Ignite](https://user-images.githubusercontent.com/1479215/206780298-2b98221d-9c57-4cd3-866a-cf85ec1ddd9e.jpg)

[![CircleCI](https://circleci.com/gh/infinitered/ignite.svg?style=svg)](https://circleci.com/gh/infinitered/ignite)

## The latest and greatest boilerplate for Infinite Red opinions

This is the boilerplate that [Infinite Red](https://infinite.red) uses as a way to test bleeding-edge changes to our React Native stack.

Currently includes:

- React Native
- React Navigation
- MobX State Tree
- TypeScript
- And more!

## Quick Start

The Ignite boilerplate project's structure will look similar to this:

```
ignite-project
├── app
│   ├── components
│   ├── config
│   ├── i18n
│   ├── models
│   ├── navigators
│   ├── screens
│   ├── services
│   ├── theme
│   ├── utils
│   └── app.tsx
├── assets
│   ├── icons
│   └── images
├── test
│   ├── __snapshots__
│   ├── mockFile.ts
│   └── setup.ts
├── README.md
├── android
│   ├── app
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── keystores
│   └── settings.gradle
├── ignite
│   └── templates
|       |── app-icon
│       ├── component
│       ├── model
│       ├── navigator
│       └── screen
├── index.js
├── ios
│   ├── IgniteProject
│   ├── IgniteProject-tvOS
│   ├── IgniteProject-tvOSTests
│   ├── IgniteProject.xcodeproj
│   └── IgniteProjectTests
├── .env
└── package.json

```

### ./app directory

Included in an Ignite boilerplate project is the `app` directory. This is a directory you would normally have to create when using vanilla React Native.

The inside of the `app` directory looks similar to the following:

```
app
├── components
├── config
├── i18n
├── models
├── navigators
├── screens
├── services
├── theme
├── utils
└── app.tsx
```

**components**
This is where your reusable components live which help you build your screens.

**i18n**
This is where your translations will live if you are using `react-native-i18n`.

**models**
This is where your app's models will live. Each model has a directory which will contain the `mobx-state-tree` model file, test file, and any other supporting files like actions, types, etc.

**navigators**
This is where your `react-navigation` navigators will live.

**screens**
This is where your screen components will live. A screen is a React component which will take up the entire screen and be part of the navigation hierarchy. Each screen will have a directory containing the `.tsx` file, along with any assets or other helper files.

**services**
Any services that interface with the outside world will live here (think REST APIs, Push Notifications, etc.).

**theme**
Here lives the theme for your application, including spacing, colors, and typography.

**utils**
This is a great place to put miscellaneous helpers and utilities. Things like date helpers, formatters, etc. are often found here. However, it should only be used for things that are truly shared across your application. If a helper or utility is only used by a specific component or model, consider co-locating your helper with that component or model.

**app.tsx** This is the entry point to your app. This is where you will find the main App component which renders the rest of the application.

### ./assets directory

This directory is designed to organize and store various assets, making it easy for you to manage and use them in your application. The assets are further categorized into subdirectories, including `icons` and `images`:

```
assets
├── icons
└── images
```

**icons**
This is where your icon assets will live. These icons can be used for buttons, navigation elements, or any other UI components. The recommended format for icons is PNG, but other formats can be used as well.

Ignite comes with a built-in `Icon` component. You can find detailed usage instructions in the [docs](https://github.com/infinitered/ignite/blob/master/docs/Components-Icon.md).

**images**
This is where your images will live, such as background images, logos, or any other graphics. You can use various formats such as PNG, JPEG, or GIF for your images.

Another valuable built-in component within Ignite is the `AutoImage` component. You can find detailed usage instructions in the [docs](https://github.com/infinitered/ignite/blob/master/docs/Components-AutoImage.md).

How to use your `icon` or `image` assets:

```
import { Image } from 'react-native';

const MyComponent = () => {
  return (
    <Image source={require('../assets/images/my_image.png')} />
  );
};
```

### ./ignite directory

The `ignite` directory stores all things Ignite, including CLI and boilerplate items. Here you will find templates you can customize to help you get started with React Native.

### ./test directory

This directory will hold your Jest configs and mocks.

## Running Maestro end-to-end tests

Follow our [Maestro Setup](https://ignitecookbook.com/docs/recipes/MaestroSetup) recipe from the [Ignite Cookbook](https://ignitecookbook.com/)!
