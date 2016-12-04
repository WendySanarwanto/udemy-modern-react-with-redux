# Weather, a React-Redux's Sample  

This is a simple web SPA which demonstrate the concepts in React-Redux such as Reducers, Action, Action creator and calling Backend API. Below are the details inside of the app : 

- Action creator for calling API Backend (OpenWeather API) & defined the Action's type as constant.
- Calling API through using axios library.
- Using specific redux middleware (redux-promise) for handling Promise object (returned from calling axios's get method) into resolved data and assign the resolved data into the action's payload, automatically.
- Handling state in reducer by not mutating the state. Instead, we create a new state which takes prior state's data and also current data.
- Displaying a series of data in a line chart through using components in react-sparklines library.
- Displaying location-type data in a mini google map through using components in react-google-maps library.
- Refactoring duplicated markups by moving these markup into a component (WeatherList component) so that the markups can be shared in other area within application.


# Known issues:

- Current implementation does not support responsive layout. 
- Returned Error from calling API Backend has not been shown on screen yet.
- Refreshing the result can only be made through refreshing the page.

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

###Getting Started###

There are two methods for getting started with this repo:

####Familiar with Git?#####
Checkout this repo, install dependencies, then start the gulp process with the following:

```
	> git clone https://github.com/WendySanarwanto/udemy-modern-react-with-redux.git
	> cd udemy-modern-react-with-redux/weather
	> npm install
	> npm start
```

####Not Familiar with Git?#####
Click [here](https://github.com/WendySanarwanto/udemy-modern-react-with-redux/archive/master.zip) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
	> npm install
	> npm start
```
