# ReviewTrackers List Application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Application Information

This App was created as part of a coding assignment for ReviewTrackers by Marko Fithian. The purpose of this application is to create a list of reviews generated from a json file, allow a user to click on each to see more details, and add a response to each review. This application is currently not integrated to any backend and so cannot save data between instances at this time.

### Usage

Upon loading on the landing screen a user can click on each of the review boxes to open up more details about that review. On the review details page a user can press the return arrow to return to the main list, or press the pencil button to open an edit interface. The edit interface has a space for the user to add their response and their name as well as a cancel or save button. The response is only saved if the user hits the save button, if cancel or return are pressed first the response is not saved.

## Technology

This application makes use of Redux to manage states between pages in the application. The Redux store holds state for the total list of all review data, one individual review, and the state of the application's navigation. Redux was chosen to be incorporated into this app to help reduce the amount of useStates and functions that would have to be passed between different modules. The author chose not to use any state management or component libraries to do his best to match the Figma Design document as best he could with CSS.

## Live Demo

This application has also been uploaded to code sandbox to allow for a live web demo.

[Code Sandbox](https://codesandbox.io/s/silly-bas-5mjdxe)

[Live Demo](https://5mjdxe.csb.app/)

Thank you again for giving me the opportunity to complete this task!

## Initial Setup

Instal dependencies with `npm install` Then you may use the available built in scripts:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
