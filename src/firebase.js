import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider, deleteUser } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase();
export const dbRef = ref(getDatabase());
export const provider = new GoogleAuthProvider();

/**
 * Add's user's calculator results to the database
 * @param {object} userData object containing user's results from calorie calculator
 * @param {string} userId  current user's id
 */

export const writeUserDataFirebase = (userData, userId) => {
  set(ref(db, 'userStats/' + userId), userData);
};

export const writeMealPlansFirebase = (mealPlans, userId) => {
  set(ref(db, 'mealPlans/' + userId), mealPlans);
};

export const writeActiveMealPlanValue = (value, userId) => {
  set(ref(db, 'users/' + userId + '/activeMealPlan'), value);
};

export const deleteUserFirebase = user => {
  deleteUser(user)
    .then(() => {
      // User deleted.
    })
    .catch(err => {
      // An error ocurred
      // ...
      console.log(err);
    });
};
