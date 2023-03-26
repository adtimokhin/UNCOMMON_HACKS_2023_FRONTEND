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
      title: "Physics",
      __id__: "8ktxWPWjRpBDC7kxMaQx",
      date: "06/30/2023",
      imageUrl: "/eventPosters/event5.jpg",
      location: "Chicago",
      time: "02:00 PM",
    },
    {
      title: "Computer Science",
      __id__: "AL2aUM0PAeN6Ke1tRxPF",
      date: "03/14/2022",
      imageUrl: "/eventPosters/event10.jpg",
      location: "Chicago",
      time: "10:00 AM",
    },
    {
      title: "Computer Science",
      __id__: "F1uNiQ1FF4AwLE5UXQXM",
      date: "04/29/2023",
      imageUrl: "/eventPosters/event2.jpg",
      location: "Wisconsin",
      time: "10:00 AM",
    },
    {
      title: "Film",
      __id__: "Lh7VcpYZu9WOaESbQ6Rp",
      date: "03/30/2023",
      imageUrl: "/eventPosters/event1.jpg",
      location: "Chicago",
      time: "11:00 AM",
    },
    {
      title: "Computer Science",
      __id__: "P6DpzZGEKhT60lOq0Wbp",
      date: "03/31/2023",
      imageUrl: "/eventPosters/event6.jpg",
      location: "Indiana",
      time: "02:00 PM",
    },
    {
      title: "Art",
      __id__: "TRwUffYzJwkyzl4n7YWR",
      date: "07/15/2023",
      imageUrl: "/eventPosters/event7.jpg",
      location: "Chicago",
      time: "03:00 PM",
    },
    {
      title: "Economics",
      __id__: "X7gZsNhtgGEI4jhWiNVS",
      date: "04/30/2023",
      imageUrl: "/eventPosters/event3.jpg",
      location: "Chicago",
      time: "09:30 AM",
    },
    {
      title: "Art",
      __id__: "w4qly2FKkaHmssT1EV7W",
      date: "05/01/2023",
      imageUrl: "/eventPosters/event4.jpg",
      location: "Indiana",
      time: "10:00 AM",
    },
  ];
}
