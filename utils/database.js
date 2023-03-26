import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

const firebaseConfig = {
  apiKey: "AIzaSyAEZpxLF5nEn9r1b3-Xx8kKsnq4pm0J_kU",
  authDomain: "uncommon-hacks-2023.firebaseapp.com",
  projectId: "uncommon-hacks-2023",
  storageBucket: "uncommon-hacks-2023.appspot.com",
  messagingSenderId: "462640014263",
  appId: "1:462640014263:web:c3fcea0b80fa6f88c83e32"
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
      imageURL:
        "https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
    },
    {
      title: "Card 2",
      location: "Location 2",
      imageURL: "https://via.placeholder.com/400x300",
    },
    {
      title: "Card 3",
      location: "Location 3",
      imageURL: "https://via.placeholder.com/400x300",
    },
    {
      title: "Card 4",
      location: "Location 4",
      imageURL: "https://via.placeholder.com/400x300",
    },
    {
      title: "Card 5",
      location: "Location 4",
      imageURL: "https://via.placeholder.com/400x300",
    },
    {
      title: "Card 6",
      location: "Location 4",
      imageURL: "https://via.placeholder.com/400x300",
    },
  ];
}
