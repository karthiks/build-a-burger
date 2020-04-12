## The Creator
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## The Tech Stack
- SPA
    - [x] React (w/ create-react-app, Functional Components, Hooks, PropTypes etc.)
    - [ ] Preact
    - [ ] Vue
    - [ ] Angular
- Bundling
    - [x] Webpack (comes as default with create-react-app)
        - Compile next-gen JS features
        - Transform JSX to JS
        - CSS Auto-prefixing (transforming CSS to support various browsers by adding browser specific prefixes)
        - Support image imports
        - Optimize code
        - Integrate Source-mapping
    - [ ] Bundler
    - [ ] Browserify
- Loaders for file transformation
    - [x] Babel Loader (comes as default with create-react-app)
    - [ ] CSS Loader
- Plugins for build transformation to optimize
    - [ ] Uglify
    - [ ] Babel-minify
    - [ ] Terser
- Unit Testing
    - [x] Jest, Enzyme
    - [ ] [React-Testing-Library](https://github.com/testing-library/react-testing-library)
    - [ ] Mocha, Chai
    - [ ] Jasmine
- E2E Testing
    - [ ] [Cypress](https://www.cypress.io/)
    - [ ] Selenium
    - [ ] [TestCafe](https://devexpress.github.io/testcafe/)
    - [ ] [Puppeteer](https://pptr.dev/)
- UI Styling
    - [ ] Plain old CSS
    - [x] Inline Styling
    - [x] CSS Modules (comes as default with create-react-app)
    - [ ] [Material UI](https://material-ui.com)
    - [ ] [React Bootstrap](https://react-bootstrap.github.io)
- UI Components Emulator/Sandbox for Productive Development and Documentation
    - [ ] [Storybook](https://storybook.js.org) is the most popular one as  of today.
    - [ ] [Atellier](http://scup.github.io/atellier/)
    - [ ] [react-sketchapp](https://stackshare.io/react-sketchapp)
    - [ ] [many more..](https://blog.logrocket.com/alternatives-to-react-storybook/)
- Linting & Transpiling
    - [x] Babel for transpilation of ES6+ (comes as default with create-react-app)
    - [x] ESLint for linting
    - [ ] Typescript
    - [ ] Flow
- Server-Side Rendering (SSR) of SPA react apps
    - [ ] [NextJS](https://nextjs.org/)
    - [ ] Gatsby
## Need more inspiration??
- See [React Rocks](https://react.rocks/)
- See https://reactjsexample.com/ for a nice collection of often useful examples done in React.js
- See https://madewithreact.com/ for a collection of websites and applications using the React or React Native JavaScript library.
- See http://buildwithreact.com/ for periodical of tutorials and advanced articles for the ReactJS library.
- See https://madewithreactjs.com/ for a collection of projects made with React.js – Websites, UI Components, Frameworks, Apps and more!
- See http://builtwithreact.io/ for UIs built with React.

## Testing Tools

### Jest
- It is a test runner
- It executes tests and proides validation library

### Enzyme
- Is an effiecient and popular alternative to official React Test Utils.
- It is open-sourced by AirBnB.
- It is used to simulate the React App (mounts components, allows you to dig into DOM, etc.)
- **Important**: Install enzyme along with its peer dependencies for things to work well in your project like below:<BR/>
    `npm install -D enzyme react-test-renderer enzyme-adapter-react-16`.
- Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output. Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal.
- Further install `jest-enzyme` module for extended enzyme matchers by following steps below:
    - Install like `npm install -D jest-enzyme`
    - Use `import 'jest-enzyme';` in `setupTests.js`.

## npm Quickly
- To install non-prod dependencies you run `npm i -D`, where `i` implies `install` and `-D` implies `devDependencies`.
- To install prod dependencies you run `npm i -s`, where `i` implies `install` and `-s` implies `dependencies`.

## Storybook Quickly
- Website: [Storybook](https://storybook.js.org/addons/)
- To add storybook to your existing project run commands below from the root directory of your project:
    ```bash
        npx -p @storybook/cli sb init #Note it s npx not npm
        npm run storybook

        # To install additional addons
        # This addon can be used to display data received by event handlers
        npm i -D @storybook/addon-actions
        # Docs addon transforms your Storybook stories into component's live document. This is used as replacement for addon-info.
        npm i -D storybook/addon-docs
        # This addon is used to show stories source in the addon panel as "Story" tab.
        npm i -D @storybook/addon-storysource
        # Knobs addon allow you to edit props dynamically using the Storybook UI. You can also use Knobs as a dynamic variable inside stories in Storybook.
        npm i -D storybook/addon-knobs
    ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
