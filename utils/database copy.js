import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, query, where, getDocs,doc } from "firebase/firestore";
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
const db = getFirestore();
// const eventL = db.collection('Event');
// const docSnap = await getDoc(eventL);
//const eventRef = db.collection('Events');
//const snapshot = await eventRef.get();

// const snapshot= await getDocs(doc(db, 'Events'), data); 
// snapshot.forEach(doc => {
//   console.log(doc.id, '=>', doc.data());
// });

const querySnapshot = await getDocs(collection(db, "Events"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});



// Get a list of cities from your database
export async function getEventById() {}

export async function getAllEventsByCategories(categories) {}

export function getAllEvents() {

return querySnapshot;

}
