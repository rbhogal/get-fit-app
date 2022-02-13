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
    <!--<a href="https://game-save.web.app">View Site</a> -->
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
* [Firebase - Authentication and Realtime Database](https://firebase.google.com/)
* Chart.js
<!--
<p align="right">(<a href="#top">back to top</a>)</p>

## Features

### Sign in as a Guest or with Google. 
* Sign in is required to save titles. 

### Search Video Game Titles
* Scroll through popular titles on the home page, use the search bar, or use the dropdown to search games by genre

### View Quick Summaries
* Hover over titles to view and scroll through summary
* Quick save button to save titles

### Full Game Information Page
Click on video game title to view:
* Summary and storyline, links, and more game information
* Videos
* Screenshots
* Artworks gallery
* Click on images to zoom in and scroll through gallery (no loading spinner currently, may have to wait for next image to load)
* Add button to add to your list

### Save Games to List
* View (or delete) your saved games by clicking "Saved Games" via the profile button dropdown

<p align="right">(<a href="#top">back to top</a>)</p>

## How I Worked On This Project

### Designing

* I'm not a designer but I wanted to closely follow a professional workflow but Adobe XD was giving me too much trouble loading fonts. Instead I roughly drew it out on a sketchpad: [Sketchpad](https://raw.githubusercontent.com/rbhogal/game-save-app/main/screenshots/sketch-home-page.jpg)
* For the app's design I took inpsiration from varous gaming-related websites such as [GOG.com](https://www.gog.com/) and [IGDB.com](https://www.igdb.com/games/the-legend-of-zelda-breath-of-the-wild) to name a few

### Planning: User Stories & Features
* I wrote out user stories and features: [Screenshot](https://raw.githubusercontent.com/rbhogal/game-save-app/main/screenshots/game-save-user-stories-features.png)

### Organizing: Task & Bug Tracking
* I organized my work using Notion
* I worked on tasks on a Kanban board using Notion: [Link to Task & Bug Tracker](https://hypnotic-saver-f39.notion.site/3fbacc81006c470e8338bda191f6a7d0?v=48360e6b61a245df8627d0df2eef8e31)

<p align="right">(<a href="#top">back to top</a>)</p>

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

## The Idea Behind This Project

#### To Practice My Skills
After finishing my react and redux course I wanted to create an app to practice all that I learned such as:
* React & Redux
* Authentication (Firebase Google)
* HTTP Reqeusts/Consuming an API (IGDB API)
* CRUD operations and a database (Firebase Realtime Database) 

#### Solve a Problem I Had
I like video games but I don't have a lot of time to play. So sometimes a new one comes out (or I am reminded of an old one I never got a chance to play) and I want to remember to purchase it in the future. But I forget what games they were. So I made an app, and no matter what system the game is on, I can search it, and save it for later. Now I have a wish list of games I can come back to when I'm looking to game.

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
