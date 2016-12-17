# Blog, a React-Redux's Sample

This is a simple web SPA which demonstrate the concepts in React-Redux such as Reducers, Action, Action creator, calling Backend API, pages routing & navigations, form rendering, validations & submission. 
Below are the details inside of the app :

- Navigating between pages in an application through using react-router library.
- Declaring page navigation's routes within the application through using react-router's Route component.
- Display react-router's Router component as the top component, replacing the App component. The Router component takes react-router's browserHistory component as its history property & defined routes object on its routes property.
- Using react-router's <Link> component to allow the user navigating to certain regiestered paths through clicking it.
- Calling GET, POST, DELETE API through using axios library within action creators - they are created &amp; called for retrieving a list of post items, viewing an individual post &amp; deleting the viewed post.
- Using redux-promise library for handling API request, transforming the result into desired data.
- Create a reducer which hold the retrieved a list of data &amp; an individual data and packed within a state.
- Building Form user interface for submitting entries through using components in redux-form library, including field's validations.

# Work Details:
Below are detail of works that are taken for implementing this sample:

1. Prepare project repository - setup required dependencies, .gitignore setting, README.md.
2. Define application's routes for navigating pages within the application.
3. Create Posts Index page component which is supposed for displaying a list of post items.
4. Create an Action creator for fetching a list of post items.
5. Connect the fetch post action creator with the Post Index component's props.
6. Create a Reducer which holds retrieved post items and a post's content.
7. Connect the reducer to Post Index component's props and render the items on Post Index's screen.
8. Create Add New Post page component and build the form by using redux-form 
9. Add a Link button on Post Index component which redirect the user to Add New post page when it's clicked.
10. Create Action creator for sending entered post on the Add New Post to Backend API.
11. Connect the Post New data Action Creator with the Add New Post page component. Ensure the action is invoked when Save button is clicked.
12. Navigate the user to Post Items list index page when Add New Post button is clicked and sending a new Post entry to Backend is completed.
13. Redirect the user to Post Items list index page when Cancel Link button is clicked.
14. Create View Post page component. Ensure that the user visit the page when they click a Post Item on the Posts List Index page.
15. Create Action creator for fetching a Post Data from Backend API.
16. Connect the Fetch Post action creator to the View Post page component. Ensure that the action is called when the page is loaded.
17. Connect the reducer to the View Post page component. Ensure that the fetched post is rendered on page's fields.
18. Handle back to Posts List inde page button's clicked event on View Post page component.
19. Create action creator for deleting a Post by ID. 
20. Connect the Delete Post action creator with the View Post page component. Ensure that the action is called when Delete button is clicked.
21. Navigate the user to Post Items list index page when Delete Post button is clicked and Post to Backend is completed.

# Known issues:

- Current implementation does not support responsive layout.
- Visual glitch on Index page after Adding a New Post &amp; Deleting a Post 
   - On Index page, the info alert occasionally shows for hundred millisecs after navigating back from other screens.
   - When clicking a Post item on index page's list section and being navigated to the View Post page, the View Post page displays prior Post's content, for few hundred millisecs.

Interested in learning [Redux](https://www.udemy.com/react-redux/)?

###Getting Started###

There are two methods for getting started with this repo:

####Familiar with Git?#####
Checkout this repo, install dependencies, then follow these commands:

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
