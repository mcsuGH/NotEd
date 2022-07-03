# NotEd
![Screenshot](https://i.imgur.com/eLzuLRu.png)

# Task
[Welcome to notEdApp](https://noted-notedup.herokuapp.com/)!\
\
notEd is a solo project that I decided to create to help consolidate the learnings from working on my final team project at [Makers Academy (EdUp)](https://github.com/jmcnally17/EdUp).\
\
I have attempted to recreate many features from this project and repurposed them to work for a notekeeping app instead, hence the name notEdApp (not-Ed-Up).\
\
In this app, users will be able to create notes which can be viewed with the most recent ones showing first, notes will be able to be removed to prevent clogging the view, there will be a maximum limit of notes for each user, there will be a premium user feature (and a payment system to allow this) which allows the premium users to check their old notes, there will be a interactive calendar system that users can use to mark events.

Technologies used:

- [Heroku](https://noted-notedup.herokuapp.com/) for hosting app
- [Mongoose](https://mongoosejs.com) to model objects in MongoDB
- [Express](https://expressjs.com/) web framework for Node.js
- [React](https://reactjs.org/) for frontend
- [Node](https://nodejs.org/en/) for backend
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) for hosting our database
- [TailwindCSS](https://tailwindcss.com/) for CSS
- [StripeAPI](https://stripe.com/) for our Payment system
- [Jest](https://jestjs.io/) for testing
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing
- [Github](https://github.com/mcsuGH/notEdApp.git) for hosting code, version control and GithubActions used for CI/CD

# Instructions
Visit https://noted-notedup.herokuapp.com/ or if you wish to run the app locally:
## Setup Node
Make sure you have the most recent update of Node - you can use [Node Version Manager](https://github.com/nvm-sh/nvm). After installing NVM, you then run the following to install Node:
```
nvm install --lts
```
## Setup MongoDB
```
brew tap mongodb/brew
brew install mongodb-community@5.0
brew services start mongodb-community@5.0
```

## Setup Project
```
git clone https://github.com/mcsuGH/notEdApp.git notEdApp
cd notEdApp
npm install
cd client
npm install
```
## Run Project
Open up a second terminal, then on one terminal, while in the main notEdApp directory run `npm run start-dev`, on the other terminal, `cd client` then run `npm start`.

## Setup Stripe
If you wish to get the website fully functional, with the test payment system, register at [Stripe](https://stripe.com/). Then while in the main directory create a file named `.env`. Inside the `.env` file, put in:
```
API_KEY="sk_test_51..."
```
where API_KEY is the API key from your account from Stripe.

# Features
Here is a video showcasing some of the features of the App: 
[![notEdApp](https://i.imgur.com/WVpNiUM.png)](https://www.youtube.com/watch?v=JeeGaNxC-Lc "notEdApp")

- Users are able to register
- Users are not able to register if the username has already been used
- Passwords are encrypted
- Users can login and logout
- Successful logins redirect to Notes page
- Unsuccessful logins show an error message
- Successful registration redirects to Login page
- Unsuccessful registration shows an error message
- Navigation Bar shows different links depending if User is logged in or not
- Users not logged in who try to go on Notes/Calendar pages will be redirected to Login
- Users are able to create upto 10 Notes
- Attempting to create more than 10 will show a error
- Users are able to hide Notes
- Users are able to create Events on the Calendar (that only they can see)
- Users are able to click their Events on the Calendar to see the full title and description
- Users are able to delete their Events on the Calendar
- Users are able to filter the Events they see on the Calendar using the toggles
- Users are able to upgrade their user status to Premium by paying the test system £5.00
- Premium Users see a thank you message in place of the payment after successfully upgrading
- Premium Users are able to see their Notes that they have hidden on the Notes page


It is worth mentioning that I have attempted to keep requests to the server to a minimum - for example, when loading the Notes page, it will do one fetch initially, then any notes that get added/deleted are done so dynamically without the need of a new fetch request. The same applies to the Calendar - one fetch initially, then any changes are done so dynamically. For the User, the same still applies, there is one fetch initially when logging in, which is then stored locally and any changes such as upgrading to Premium is done without the need of fetching to the server again.


