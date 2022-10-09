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
    </li>H
    <li>
      <a href="#how-i-worked-on-this-project">How I Worked On This Project</a>
    </li>
    <li>
      <a href="#how-to-navigate-this-project">How To Navigate This Project</a>
  </li>
  <li>
      <a href="#future-improvements">Future Improvements</a>
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
My main issue is that meal plans are saved on a calender so when you log back in you start with a blank slate to input the meals for your current day. However I prefer to eat the same meals for a couple weeks, so I find this doesn't work for me. I like to have a record of it to remember what I'm supposed to be cooking and eating without having to search back through the calender. I also find them cluttered and difficult to navigate.

#### What's Different About This Tracker?
You can create new meal plans but when you log back in you'll see your latest meal plan. You can create and save as many new plans as you like. Features are simple, no clutter from the fitness app trying to make more money off you by adding more features that only make the app more confusing to navigate and use. 

#### Passion for Fitness
Years ago I lost 110 lbs and have kept it off and ever since developed a passion for fitness and nutrition. What started off first as calculating my calories and macros using a calculator, pen, and paper eventually evolved to storing it in a word doc, then to creating more and more complex excel spreadsheets with formulas, tables, and graphs to keep track of my meals and progress. So naturally I thought why not take all that knowledge I have built up and centralize it by creating an app that fits my needs.  

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

#### Redux State Management
* [Code](https://github.com/rbhogal/get-fit-app/blob/main/src/features/userSlice.js): User

* [Code](https://github.com/rbhogal/get-fit-app/blob/main/src/features/mealSlice.js): Meals

#### Context State Management: Auth/Login
* [Code](https://github.com/rbhogal/get-fit-app/blob/main/src/context/AuthContext.js): Persists logged in user and user id

<p align="right">(<a href="#top">back to top</a>)</p>

## Future Improvements

- [ ] Integrate Food API 
- [ ] Quick Add Meals: Favorite/Save meals to quickly add later
- [ ] Weight Log: A weight log to track your daily weight with graph and calculations to see trends
- [ ] Better closeable tabs (will also fix padding issue for meal plans on mobile)
- [ ] Notes feature
- [X] Add option to maintain calories
- [ ] Improve Meal Planner UI 
- [ ] Better responsiveness of meal plan tables and inputs
- [ ] Persist the selected inputs on profile page
<!--     - [ ] Nested Feature -->

See the [open issues](https://github.com/rbhogal/get-fit-app/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

## Q & A 

### How Did You Calculate Calories and Macros?

#### 1. Find Basal Metabolic Rate (BMR) using the The Mifflin St. Jeor Equation

    Men:
      BMR = (10 x weight in kg) + (6.25 height in cm) - (5 x age in years) + 5
    
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
    
#### 5. Suggested Macros (Accurate for those losing <50lbs)

    Protein (g) = 1 g per lb of bodyweight
    Fats (g) = 0.3 g per lb of bodyweight
    Carbs (g) = Whatever is left over = Daily Calories - (Protein (kcal) + fats (kcal)) / 4 grams of carbs/kcal
    
#### [Code: Calculating Calories](https://github.com/rbhogal/get-fit-app/blob/4636e5a6642a07c53faee8e77cd38c4ef3113caf/src/pages/Profile.js#L281)

#### [Code: Calculating Macros](https://github.com/rbhogal/get-fit-app/blob/4636e5a6642a07c53faee8e77cd38c4ef3113caf/src/pages/Profile.js#L247)

## Challenges

### Nested Arrays and Objects / State Management
Updating (nested) state using hooks without mutating data was the biggest challenge. My meal plans are stored in an array with nested objects that have further nested objects and arrays. At first I wasn't sure how to safely update a nested array directly inside the setState hook without mutating the data. Eventually I figured I could just create new block scoped variables to update the nested data and then setState with the new object. 

### Dynamic Tabs 

#### Problem 1
Material UI provides a tabs component however it doesn't allow for you to dynamically add new tabs and close them. So I had to code my own functionality. What I did was add an add and delete button to the sides of the tab window. To add a new one you click add, to delete a tab you have to first select the tab you want to delete and then the delete button, as opposed to having the delete button inside of each tab. This is not an ideal solution and I have to improve upon it in the future. The two buttons on each side also cause a padding issue on mobile, the meal plan's container leaves a padding the width of the buttons on the sides. 

#### Fixes
Added buttons, created an addMealPlan function which adds a new meal plan to the array and a deleteMealPlan which removes it from the array

[Add Meal Plan Function](https://github.com/rbhogal/get-fit-app/blob/eac1e1848f189f982c19a1852ca89df6c6020a92/src/pages/MealPlanner.js#L131)

[Delete Meal Plan Function](https://github.com/rbhogal/get-fit-app/blob/52c41eb92eafed4e5fa8ca5a8ec4238c8b5935e9/src/pages/MealPlanner.js#L165)

#### Problem 2
I also had to address a new issue this caused which was setting the active tab once the selected tab was deleted, and then also the naming of the tabs which are labeled as Meal Plan `${mealPlanArray.length + 1}`... (Meal Plan 1, Meal Plan 2, Meal Plan 3...) with the issue being that if you delete a tab, lets say you have 3 meals plans and you delete Meal Plan 2, the new tab would be named Meal Plan 3 and now you have a duplicate (Meal Plan 1, Meal Plan 3, Meal Plan 3). I fixed this by looping the array (forEach) and checking for duplicates and making sure if one is found that it's named Meal Plan 3 (1), if even that one exits it'll be named Meal Plan 3 (2) and so forth. 

#### Fixes
[Setting Active Tab](https://github.com/rbhogal/get-fit-app/blob/3274fdfef895974e09ee7bdbc39feecfefe9905e/src/pages/MealPlanner.js#L170)

[Preventing Duplicate Tab Names](https://github.com/rbhogal/get-fit-app/blob/3274fdfef895974e09ee7bdbc39feecfefe9905e/src/pages/MealPlanner.js#L132)

### Responsiveness of Meal Plan
The Meal Plan is a table which is not truly capable of being viewed on mobile so I had given up on creating a solution as I don't really see this being an app to be used on mobile. It doesn't break but it sure is ugly and not effective. The improvement I would like to make is just give the whole table a scroll bar. Again, not great because it's a table afterall, but it's the only solution I think would make sense. The other option being keeping the meal name and calories column, and getting rid of the rest on mobile. 




<p align="right">(<a href="#top">back to top</a>)</p>


