<div id="top"></div>



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


<details>
  <summary>Table of Contents</summary>
  <ol>
     <li>
      <a href="#about-the-project">About the Project</a>
        <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#features">Features</a></li>
      </ul>
    </li>
    <li>
      <a href="#the-idea-behind-this-project">The Idea Behind This Project</a>
    </li>
    </li>
    <li>
      <a href="#how-i-worked-on-this-project">How I Worked On This Project</a>
    </li>
    <li>
      <a href="#how-to-navigate-this-project">How To Navigate This Project</a>
  </li>
  <li>
      <a href="#if-i-had-more-time-i-would-add-this">If I Had More Time I Would Add This</a>
  </li>
  <li>
    <a href="#q--a">Q & A</a>
  </li>
  </ol>
</details>

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
* Create new individual meal plans 
* Save a meal as breakfast, lunch, dinner, or snack
* Edit or delete meal entries
* Total calories and macros for your meals are calculated in the bottom row with a +/- calorie/macros needed to hit your target goal
* Save your meal plans with your user account 

<p align="right">(<a href="#top">back to top</a>)</p>

## The Idea Behind This Project

#### What's Wrong With Other Trackers?
My main issue is that meal plans are saved on a calender so when you log back in you start with a blank slate to input the meals for your current day. However I prefer to eat the same meals for a couple weeks, so I find this doesn't work for me. I like to have a record of it to remember what I'm supposed to be cooking and eating without having to search back through the calender. 

#### What's Different About This Tracker?
This tracker allows you create new meal plans but when you log back in you'll see your latest meal plan. You can create as many new plans as you like. Features are simple, no clutter of the fitness app trying to make more money off you by adding more features that only make the app more confusing to navigate and use. 

#### Passion for Fitness
Years ago I lost 110 lbs and have kept it off and ever since developed a passion for fitness and nutrition. What started off first as calculating my calories and macros using a calculator, pen, and paper eventually evolved to storing it in a word doc, then to creating more more complex excel spreadsheets with formulas, tables, and graphs to keep track of my meals and progress. So naturally I thought why not take all that knowledge I have built up and centralize it by creating an app that fits my needs.  

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
* [Code](src/pages/SignIn.js): Handling Guest and Google Sign

#### Calorie and Macro Calculations
* [Code](https://github.com/rbhogal/get-fit-app/blob/4636e5a6642a07c53faee8e77cd38c4ef3113caf/src/pages/Profile.js#L281): Calculating BMR, TDEE (Maintenance), and Daily Calories 

* [Code](https://github.com/rbhogal/get-fit-app/blob/4636e5a6642a07c53faee8e77cd38c4ef3113caf/src/pages/Profile.js#L247): Calculating Suggested Macros 

* Form Validation

![Calorie Calculator Form Validation](https://raw.githubusercontent.com/rbhogal/get-fit-app/main/src/images/screenshots/Profile%20Input%20Validation.png)

* User Warning if Calories Are Too Low

![Calories Warning](https://raw.githubusercontent.com/rbhogal/get-fit-app/main/src/images/screenshots/Too%20Low%20Calories%20Validation.png)

#### Calculating Custom Set Macros
* [Code](https://github.com/rbhogal/get-fit-app/blob/4636e5a6642a07c53faee8e77cd38c4ef3113caf/src/hooks/useInputMacros.js#L17): Handling user inputed percentages to calculate macros in grams for protein, carbs, and fats

* Alerts User If Fats are Too Low or Too High
![Too Low Fats](https://raw.githubusercontent.com/rbhogal/get-fit-app/main/src/images/screenshots/adjust-macros-low-fats.png)
![Too High Fats](https://raw.githubusercontent.com/rbhogal/get-fit-app/main/src/images/screenshots/adjust-macros-high-fats.png)

#### Calculating Total Calories and Macros for Meal Plan
* [Code](https://github.com/rbhogal/get-fit-app/blob/43de1167a62fd4018b80e0794c125056f9dcd5a5/src/components/Totals.js)

![Total and +/- Calories and Macros](https://raw.githubusercontent.com/rbhogal/get-fit-app/main/src/images/screenshots/Totals%20Changes.png)

#### Handling Adding, Editing, and Deleting Meals
* [Code](https://github.com/rbhogal/get-fit-app/blob/main/src/components/MealPlan.js)

#### Custom Hooks
* [Code](https://github.com/rbhogal/get-fit-app/blob/4636e5a6642a07c53faee8e77cd38c4ef3113caf/src/pages/Profile.js#L162): Custom hook to get input and input validation values when calculating calories and macros 

* [Code](https://github.com/rbhogal/get-fit-app/blob/4636e5a6642a07c53faee8e77cd38c4ef3113caf/src/components/MacrosModal.js#L31): Custom hook to get input data when adjusting macros

#### Redux 
* [Code](https://github.com/rbhogal/get-fit-app/blob/main/src/features/userSlice.js): User

* [Code](https://github.com/rbhogal/get-fit-app/blob/main/src/features/mealSlice.js): Meals

#### Auth Context
* [Code](https://github.com/rbhogal/get-fit-app/blob/main/src/context/AuthContext.js): Persists logged in user and user id

<p align="right">(<a href="#top">back to top</a>)</p>

## If I Had More Time I Would Add This
### Quick Add Meals
Favorite/Save meals to quickly add later
### Weight Log
A weight log to track your daily weight with graph and calculations to see trends

<p align="right">(<a href="#top">back to top</a>)</p>

## Q & A 

### How Did You Calculate Calories and Macros?

#### 1. Find Basal Metabolic Rate (BMR) using the The Mifflin St. Jeor Equation

    Men:
      BMR = (10 x weight in kg) + (6.25 heigh in cm) - (5 x age in years) + 5
    
    Women: 
      BMR = (10 x weight in kg) + (6.25 height in cm) - (5 x age in years) - 161
    
#### 2. Find the Total Daily Energy Expenditure (TDEE) to Find Maintainence Calories Using Katch-McArdle Activity Multipliers 

    TDEE = (BMR x Activity Level)

    Katch-McArdle Activity Multipliers 
      Sedentary: 1.2
      Lightly Active: 1.375
      Moderately Active: 1.55
      Very Active: 1.725
      Extremely Active: 1.9
    
#### 3. Find How Many Lbs to Lose/Gain Per Week

    Rates
      Slow = 0.5% per lb of bodyweight
      Moderate = 0.7% per lb of bodyweight
      Fast = 1% of per lb of bodyweight

    Lbs to Lose/Gain per Week = Weight (lbs) x Rate of Fat Loss/Muscle Gain
      
#### 4. Find Caloric Deficit/Surplus (Daily Calories)

    Caloric Deficit/Surplus = (Rate of Fat Loss/Muscle Gain (lbs) per Week x 3500 kcal) / 7 days  

    Fat Loss: 
      Daily Calories = TDEE - Caloric Deficit
    Muscle Gain: 
      Daily Calories = TDEE + Caloric Surplus
    
#### 5. Suggested Macros

    Protein (g) = 1 g per lb of bodyweight
    Fats (g) = 0.3 g per lb of bodyweight
    Carbs (g) = Whatever is left over = Daily Calories - (Protein (kcal) + fats (kcal)) / 4 grams of carbs/kcal
    
#### [Code: Calculating Calories](https://github.com/rbhogal/get-fit-app/blob/4636e5a6642a07c53faee8e77cd38c4ef3113caf/src/pages/Profile.js#L281)

#### [Code: Calculating Macros](https://github.com/rbhogal/get-fit-app/blob/4636e5a6642a07c53faee8e77cd38c4ef3113caf/src/pages/Profile.js#L247)

### What Was The Biggest Challenge? 

Updating (nested) state using hooks without mutating data. My meal plans are stored in an array with nested objects that have further nested objects and arrays. At first I wasn't sure how to safely update a nested array directly inside the setState hook without mutating the data. Eventually I figured I could just create new block scoped variables to update the nested data and then setState with the new object. 

<p align="right">(<a href="#top">back to top</a>)</p>


