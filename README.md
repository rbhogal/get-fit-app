<div id="top"></div>

### ⚠ Work in progress

<!-- PROJECT HEADER -->
<br />
<div align="center">

<h3 align="center">GetFIT</h3>

  
  <p align="center">
    A simple meal tracking app
    <br />
    <br />
    <a href="https://getfit-ee526.web.app/">View Site</a>
  </p>
</div>
<!-- TABLE OF CONTENTS -->

<!--
<details>
  <summary>Table of Contents</summary>
  <ol>
     <li>
      <a href="#about-the-project">About the Project</a>
    </li>
    <li>
      <a href="#how-i-worked-on-this-project">How I Worked On This Project</a>
      <ul>
        <li><a href="#designing">Designing</a></li>
        <li><a href="#planning:-user-stories-&-features">Planning: User Stories & Features</a></li>
        <li><a href="#organization:-task-&-bug-tracking">Organization: Task & Bug Tracking</a></li>
      </ul>
    </li>
    <li>
      <a href="#how-to-navigate-this-project">How To Navigate This Project</a>
    </li>
    <li><a href="#why-i-built-the-project-this-way">Why I Built the Project This Way</a></li>
    <li><a href="#if-i-had-more-time-i-would-change-this">If I Had More Time I Would Change This</a></li>
     <li>
      <a href="#the-idea-behind-this-project">The Idea Behind This Project</a>
    </li>
    <li><a href="#available-scripts">Available Scripts</a></li>
  </ol>
</details>
-->
<!-- ABOUT THE PROJECT -->
## About the Project
<br />
<br />

<div align="center">

![GetFIT](https://raw.githubusercontent.com/rbhogal/get-fit-app/main/src/images/sign-in-screenshot-desktop.png)

</div>
<br />

### Built With
* React
* Redux
* React-Router
* [Firebase](https://firebase.google.com/) (Authentication and Realtime Database)
* [Chart.js](https://www.chartjs.org/)
* [Material-UI v5](https://mui.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

## Features

### Sign In
* As a Guest or with Google

### Calories & Macro Calculator
* Set your calories for fat loss or muscle gain
* Adjust your macros to fit your needs

### Meal Planner
* Create a meal plan including breakfast, lunch, dinner, and snacks
* Save, edit, and delete meal entries
* Meal plans saved to your user account 

<p align="right">(<a href="#top">back to top</a>)</p>

## The Idea Behind This Project

#### What's Wrong With Other Trackers?
My main issue is that meal plans are saved on a calender. With the intent being to record your meals everyday. When you log back in the next day you to reinput your meals for the day. However I prefer to eat the same meals for a couple weeks, so I find this doesn't work for me. I like to have a record of it to remember what I'm supposed to be cooking and eating without having to search back through the calender. 

#### What's Different About This Tracker?
This tracker allows you create meal plans and store them. When you log back in you'll see your latest meal plan. You can create as many new plans as you like. Features are simple, no clutter of the fitness app trying to make more money off you by adding more features that only make the app more confusing to navigate and use. 

#### Passion for Fitness
Years ago I lost 110 lbs and have kept it off and ever since developed a passion for fitness and nutrition. What started off as first calculating my calories and macros using a calculator and paper eventually evolved to storing it in a word doc, then to creating more more complex excel spreadsheets with formulas, tables, and graphs to keep track of my meals and progress. So naturally I thought why not take all that knowledge I have built up and centralize it by creating an app that fits my needs.  

<p align="right">(<a href="#top">back to top</a>)</p>

## How I Worked On This Project

### Planning: User Stories & Features
* I wrote out user stories and features using Notion: [Link to Notion: User Stories & Features](https://hypnotic-saver-f39.notion.site/User-Stories-Features-e3e26a77bbf946be916239d738fc2701)

### Organizing: Task & Bug Tracking
* I organized my work using Notion
* I created a Kanban board using Notion to track tasks and bugs: [Link to Notion: Task & Bug Tracker](https://hypnotic-saver-f39.notion.site/23fcdefb3c024f4f9b767662e899dff4?v=e38bbd8d8a254b16b42fedca9aef405a)

<p align="right">(<a href="#top">back to top</a>)</p>

## How To Navigate This Project

#### Sign In/Authentication
Handling Guest and Google Sign
 * [Code](src/pages/SignIn.js)

#### Custom Hooks
Custom hook to get input and input validation values when calculating calories and macros 
 * [Code]
 
Custom hook to get input data when adjusting macros
 * [Code]


#### HTTP Requests from API + Use of Hooks
Home Page
  * [Code](src/components/Home.js)
 
<p align="right">(<a href="#top">back to top</a>)</p>

<!--


## How To Navigate This Project

#### Twitch OAuth Client Credentials Flow
Implementation of Twitch's OAuth client credentials flow (Fetching/Refreshing the App token storing to Firebase Database) + HTTP requests using axios: 
  * [Code](src/app/getAppToken.js)

#### HTTP Requests from API + Use of Hooks
Home Page
  * [Code](src/components/Home.js)
  
#### Mapping Arrays 
To fill carousels with game information. Game carousel component. 
  * [Code](src/components/carousels/GamesHorizontalScroll.js)

#### Google Authentication via Firebase: 
  * [Code](src/components/navbar/GoogleAuth.js)

#### Redux (Redux Toolkit - createSlice)
For user state
  * [Code](src/features/user/userSlice.js)

#### React's Context API: 
To persist state if user is signed in
  * [Code](src/store/auth-context.js)
  
#### Search Feature
Searchbox component
* [Code](src/components/navbar/searchbox/SearchBox.js)
  
#### Browse Games by Genre Feature: 
  * [Code](src/components/GameListGenre.js)
  
#### Full Game Information Page (Info, Links, Videos, Screenshots, Artworks): 
  * [Code](src/components/game/Game.js)
  * [Code](src/components/game/Game.css) (CSS)
  
#### Dynamic Styling with React: 
Example with dropdown menu
  * [Code](https://github.com/rbhogal/game-save-app/blob/692245f90cf8a7f1730671039f3dfaf96a0e937c/src/components/navbar/searchbox/SearchBox.js#L25)

<p align="right">(<a href="#top">back to top</a>)</p>

## Why I Built The Project This Way

### Project of Many Firsts
This was my very first react and redux project, as well as a first making http requests, consuming an API and token, authentication, and using a database on my own (I had done many small tutorial based react projects). Therefore my code may not be as clean as I wanted but I was doing many firsts. 

### Keep Focus on Javascript less on CSS
My goal was to maintain focus on JavaScript and React/Redux therefore I decided to keep it simple with the CSS and used external sheets rather than CSS-in-JS styled components or CSS Modules

For the same reason I also used 
  * [Bennett Wong's loading dots](https://codepen.io/bennett/pen/GjRPdk) from CodePen
  * [React Slick Library](https://react-slick.neostack.com/) for Carousels (although I did alter some code to customize)
  * [React Hot Toast Library](https://react-hot-toast.com/)

<p align="right">(<a href="#top">back to top</a>)</p>
  
## If I Had More Time I Would Change This

* Refactor some code such as [this](https://github.com/rbhogal/game-save-app/blob/main/src/components/Home.js#L155) and [this](https://github.com/rbhogal/game-save-app/blob/692245f90cf8a7f1730671039f3dfaf96a0e937c/src/components/SavedGames.js#L57) in order to not repeat myself and maintain coding best practices
* Cleaner and more organized folder structure such as moving the page components into a seperate component folder
* Add some unit, integration, and end-to-end testing using Jest and React Testing Library
* Figure out why it takes so long to initailly load
  * added lazy-loading to improve initial load time by a few seconds (1/23/2022)
* ~~Add a guest login~~ (updated 1/20/2022)
* Memory leak bug on Google user sign out
* Add a loading spinner to image galleries
* Make image gallery full screen for mobile
* Add a modal for singing in instead of a toast notification
* Instead of toast notifications I would update the buttons to alert the user that a game was saved
* Add a featured game/more content on the home page

<p align="right">(<a href="#top">back to top</a>)</p>



## Q and A

#### Did I learn a lot?
Oh yeah

#### Did it take long? 
2.5 months

#### Do I hate myself for jumping into the deep end as my first app without building up to this? 
Meh, kind of. Hard for the code to not get messy. 

<p align="right">(<a href="#top">back to top</a>)</p>

## Available Scripts

In the project directory, run:

### `npm start`

<p align="right">(<a href="#top">back to top</a>)</p>
-->
