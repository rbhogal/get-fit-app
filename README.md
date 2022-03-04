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
* Calculate your daily calories for fat loss or muscle gain
* Adjust your macros to fit your needs

### Meal Planner
* Create a meal plan including breakfast, lunch, dinner, and snacks
* Save, edit, and delete meal entries
* Meal plans saved to your user account 

<p align="right">(<a href="#top">back to top</a>)</p>

## The Idea Behind This Project

#### What's Wrong With Other Trackers?
My main issue is that meal plans are saved on a calender so when you log back in you start with a blank slate to input the meals for your current day. However I prefer to eat the same meals for a couple weeks, so I find this doesn't work for me. I like to have a record of it to remember what I'm supposed to be cooking and eating without having to search back through the calender. 

#### What's Different About This Tracker?
This tracker allows you create new meal plans but when you log back in you'll see your latest meal plan. You can create as many new plans as you like. Features are simple, no clutter of the fitness app trying to make more money off you by adding more features that only make the app more confusing to navigate and use. 

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

#### Calorie and Macro Calculations
Calculating BMR, TDEE (Maintenance), Daily Calories and Suggested Macros 
* [Code](https://github.com/rbhogal/get-fit-app/blob/4636e5a6642a07c53faee8e77cd38c4ef3113caf/src/pages/Profile.js#L281)

#### Calculating Custom Set Macros
Handling user inputed percentages to calculate macros in grams for protein, carbs, and fats
* [Code](https://github.com/rbhogal/get-fit-app/blob/4636e5a6642a07c53faee8e77cd38c4ef3113caf/src/hooks/useInputMacros.js#L17)

#### Handling Adding, Editing, and Deleting Meals
* [Code](https://github.com/rbhogal/get-fit-app/blob/main/src/components/MealPlan.js)

#### Custom Hooks
Custom hook to get input and input validation values when calculating calories and macros 
 * [Code](https://github.com/rbhogal/get-fit-app/blob/4636e5a6642a07c53faee8e77cd38c4ef3113caf/src/pages/Profile.js#L162)

Custom hook to get input data when adjusting macros
 * [Code](https://github.com/rbhogal/get-fit-app/blob/4636e5a6642a07c53faee8e77cd38c4ef3113caf/src/components/MacrosModal.js#L31)

#### Redux 
User
 * [Code](https://github.com/rbhogal/get-fit-app/blob/main/src/features/userSlice.js)

Meals
 * [Code](https://github.com/rbhogal/get-fit-app/blob/main/src/features/mealSlice.js)

#### Auth Context
To persist if user is logged in and current user id
 * [Code](https://github.com/rbhogal/get-fit-app/blob/main/src/context/AuthContext.js)





