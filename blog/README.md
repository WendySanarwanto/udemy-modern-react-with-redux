# Blog, a React-Redux's Sample

This is a simple web SPA which demonstrate the concepts in React-Redux such as Reducers, Action, Action creator, calling Backend API, pages routing & navigations, form rendering, validations & submission. 
Below are the details inside of the app :

- Navigating between pages in an application through using react-router library.
- Define page navigation's routes within the application through using react-router's Route component.
- Display react-router's Router component as the top component, replacing the App component. The Router component takes react-router's browserHistory component as its history property & defined routes object on its routes property.
- Using react-router's <Link> component to allow user navigating to certain regiestered paths through clicking it.
- Calling GET, POST, DELETE API through using axios library within action creators - they are created for getting a list of post items, viewing an individual post & deleting the viewed post.
- Using redux-promise library for handling API request, transforming the result into desired data.
- Create a reducer which hold the retrieved a list of data & an individual data and packed within a state.
- Building Form user interface for submitting entries through using components in redux-form library, including field's validations.

# Known issues:

- Current implementation does not support responsive layout.

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

###Getting Started###

There are two methods for getting started with this repo:

####Familiar with Git?#####
Checkout this repo, install dependencies, then start the gulp process with the following:

```
	> git clone https://github.com/WendySanarwanto/udemy-modern-react-with-redux.git
	> cd udemy-modern-react-with-redux/blog
	> npm install
	> npm start
```

####Not Familiar with Git?#####
Click [here](https://github.com/WendySanarwanto/udemy-modern-react-with-redux/archive/master.zip) then download the .zip file.  
Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
	> npm install
	> npm start
```
