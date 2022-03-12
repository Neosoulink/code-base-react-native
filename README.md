# 📱 Neosoulink's react native code base

Hello explorer, here is my basic code that I use to create react-native applications.

Feel free to use it if you find it useful (also put a little ⭐ if you like)

## 📋 Contents

- [Contents](#-contents)
- [Setup](#-setup)
- [Testing](#-testing)
- [Contribution](#-contribution)

## ⚡ Setup

### 🌌 Features

This codebase provides these features:

- Typescript support
- Jest testing (i.e: `npm run test` to launch all tests)
- React Navigation support (stack navigation only)
- Global store system with Redux
- Linters (Prettier, eslint, editorConfig), if you want to be able to follow these rules well, please use an editor able to support them (otherwise don't forget to run the `lint` script to see where it is not going well
- Commit rules management with [commitLint & husky](https://commitlint.js.org/#/reference-cli)

<!-- TODO: Add more folders and files descriptions -->
### 📋 App structure

    .
    ├── .expo-shared
    ├── .husky
    ├── .jest
    ├── .vscode
    ├── script
    ├── src
      ├── assets # Contain app assets (imgs, fonts, ...)
      ├── components # Contain components used in the app
        ...
        └── Provider # It contain app providers (for redux, paper, ...)
      ├── constants
      ├── helpers # Class/Functions that provides useful features
      ├── router
      ├── screens
      ├── store # Redux store
      └── App.tsx
    ├── .editorconfig
    ├── .eslintrc.json
    ├── .gitattributes
    ├── .gitignore
    ├── .prettierrc.json
    ├── .watchmanconfig
    ├── app.json
    ├── babel.config.js
    ├── commitlint.config.js
    ├── index.tsx
    ├── metro.config.js
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── tsconfig.json
    └── yarn.lock

### 🌟 Before install

**🚧 Before installing et running project locally, make sure you have :**

- The latest NPM/Yarn version installed in your computer
- Node.js V14.x.x or higher installed in your computer
- The latest version of expo app installed in your phone (or virtual device)

### ⚡ Installation & Running

- First clone project. E.g: `git clone https://github.com/Neosoulink/code-base-react-native.git`
- Install dependencies by running `npm install` or `yarn add`.
- After these steps, run `yarn run start` or `yarn run start` command to start bundle server

<!-- TODO: Add contribution -->
## 🧪 Testing

<!-- TODO: Add contribution -->
### 🤝 Contribution
