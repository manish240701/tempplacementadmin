//dependencies
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Create a root reference

const firebaseConfig = {
  apiKey: "AIzaSyCz3AmZAgQeIIi-RLfERouOBTq7EzAOOoo",
  authDomain: "placement-client.firebaseapp.com",
  projectId: "placement-client",
  storageBucket: "placement-client.appspot.com",
  messagingSenderId: "795997957898",
  appId: "1:795997957898:web:c94655a88348125ee814f3",
};

//exports
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const storage = getStorage();

export { storage };
