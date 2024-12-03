import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const register = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const login = async (email, password) => {
    try {
      // Step 1: Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user; // Firebase user data (uid, email, etc.)
  
      console.log(email);
      console.log(user.email);
        
      // Step 2: Fetch user profile data from MongoDB using the email
      const response = await fetch(`https://hairbnbbe-9f629b6e0127.herokuapp.com/record/email/${email}`);
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to fetch user profile from MongoDB");
      }
  
      const userProfile = await response.json();
      
  
      // Step 3: Return the complete user object, merging Firebase data and MongoDB data
      return {
        ...user, // Firebase user data (uid, email, etc.)
        ...userProfile, // MongoDB user profile data (name, level, stylistAvailabilities, etc.)
      };
    } catch (error) {
      throw new Error(error.message); // Handle errors during authentication or fetching
    }
  };
  