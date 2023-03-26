import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { collection, query, where, getDocs } from "firebase/firestore";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

const firebaseConfig = {
  apiKey: "AIzaSyDGeDems4Em1ydyhTx2zEAvK5R7ONfThLQ",
  authDomain: "events-4e304.firebaseapp.com",
  projectId: "events-4e304",
  storageBucket: "events-4e304.appspot.com",
  messagingSenderId: "878230429229",
  appId: "1:878230429229:web:8c09cec45b162873ca22a4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
export async function getEventById() {}

export async function getAllEventsByCategories(categories) {}

export function getAllEvents() {


  return [
    {
      title: "Card 1",
      location: "Location 1",
      imageUrl:
        "https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    },
    {
      title: "Card 2",
      location: "Location 2",
      imageUrl: "https://via.placeholder.com/400x300",
    },
    {
      title: "Card 3",
      location: "Location 3",
      imageUrl: "https://via.placeholder.com/400x300",
    },
    {
      title: "Card 4",
      location: "Location 4",
      imageUrl: "https://via.placeholder.com/400x300",
    },
    {
      title: "Card 5",
      location: "Location 4",
      imageUrl: "https://via.placeholder.com/400x300",
    },
    {
      title: "Card 6",
      location: "Location 4",
      imageUrl: "https://via.placeholder.com/400x300",
    },
  ];
}
