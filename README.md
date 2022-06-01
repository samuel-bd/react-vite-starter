# react-vite-starter
A boilerplate for [React](https://reactjs.org)-based projects, with [Vite](https://vitejs.dev) as the build tool. 

Makes use of:
* Redux ([Redux Toolkit](https://redux-toolkit.js.org) & [React-Redux](https://react-redux.js.org)) for state management
* [Emotion](https://emotion.sh/docs/introduction) as a framework-agnostic, CSS-in-JS library
* [react-router-dom](https://reactrouter.com) for navigation
* [Husky](https://typicode.github.io/husky/#/) & [lint-staged](https://github.com/okonet/lint-staged) for pre-commit git hooks
* [ESLint](https://eslint.org) & [Prettier](https://prettier.io) for opinionated code formatting
* [css-maid](https://github.com/joshxfi/css-maid) to reset/normalize CSS

## Installation
* Clone this repo:
  * `git clone https://github.com/samuel-bd/react-vite-starter.git <project-name>`
  * Replace `<project-name>` with your own name

## How To Start
* Locate your project directory, install dependencies, and run the development environment
```shell
cd <project-name>

# npm
npm i
npm run dev

# yarn
yarn
yarn dev
```

## How To Use
* The `config` folder is for storing and writing your global css variables (akin to SASS/SCSS variables)
  * `breakpoints.js` is for storing the media queries
  * `variables.js` is for storing all custom stylings that may be reused
  * You can add, remove, or change variables
* The `store` folder is for all things related to Redux
  * You can have all your Redux slices inside this folder, or store them separately per component (it is done this way in the `components` folder)
* The `pages` folder is for storing all of your application's pages.
  * The routing for these pages takes place in `src/App.jsx`

### [MIT License](https://opensource.org/licenses/MIT)

