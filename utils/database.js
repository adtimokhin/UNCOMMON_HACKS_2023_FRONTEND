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
      title: "Physics World Fair!",
      __id__: "8ktxWPWjRpBDC7kxMaQx",
      date: "06/30/2023",
      imageUrl: "/eventPosters/event5.jpg",
      location: "Puffer Hall",
      time: "02:00 PM",
      description: "🎉 Get ready for an unforgettable experience at Uncommon Hacks, the most extraordinary hackathon at UChicago! 🚀\n\nTaking place in the heart of the prestigious University of Chicago campus, Uncommon Hacks is a one-of-a-kind, 48-hour marathon of innovation, creativity, and technology. This event is custom-tailored for trailblazers, pioneers, and mavericks who dare to think outside the box and turn the wildest of ideas into reality. 💡\n\nAt Uncommon Hacks, you will:\n👥 Network with a diverse and brilliant community of fellow hackers, tech enthusiasts, and industry professionals.\n🧠 Expand your skillset through interactive workshops and mentorship from leading experts in various fields.\n🏆 Compete for amazing prizes and bragging rights as you showcase your groundbreaking projects to a panel of distinguished judges.\n🌟 Gain inspiration from keynote speakers who have made their mark in the technology industry and beyond.\n🍕 Enjoy non-stop sustenance, fun, and camaraderie with your fellow participants throughout the entire weekend.\n\nCome join us at Uncommon Hacks, and embark on a thrilling adventure that will challenge you to push the boundaries of what's possible. Whether you're a seasoned hacker, a coding novice, or simply curious about the tech world, there's something for everyone at this electrifying event! 🌐\n\nDon't miss out on this unique opportunity to unleash your inner innovator and make lasting memories at UChicago's Uncommon Hacks! Register now and let the magic begin. ✨"

    },
    {
      title: "Uncommon Hacks",
      __id__: "AL2aUM0PAeN6Ke1tRxPF",
      date: "03/14/2022",
      imageUrl: "/eventPosters/event10.jpg",
      location: "Polsky Center",
      time: "10:00 AM",
      description: "🎉 Get ready for an unforgettable experience at Uncommon Hacks, the most extraordinary hackathon at UChicago! 🚀\n\nTaking place in the heart of the prestigious University of Chicago campus, Uncommon Hacks is a one-of-a-kind, 48-hour marathon of innovation, creativity, and technology. This event is custom-tailored for trailblazers, pioneers, and mavericks who dare to think outside the box and turn the wildest of ideas into reality. 💡\n\nAt Uncommon Hacks, you will:\n👥 Network with a diverse and brilliant community of fellow hackers, tech enthusiasts, and industry professionals.\n🧠 Expand your skillset through interactive workshops and mentorship from leading experts in various fields.\n🏆 Compete for amazing prizes and bragging rights as you showcase your groundbreaking projects to a panel of distinguished judges.\n🌟 Gain inspiration from keynote speakers who have made their mark in the technology industry and beyond.\n🍕 Enjoy non-stop sustenance, fun, and camaraderie with your fellow participants throughout the entire weekend.\n\nCome join us at Uncommon Hacks, and embark on a thrilling adventure that will challenge you to push the boundaries of what's possible. Whether you're a seasoned hacker, a coding novice, or simply curious about the tech world, there's something for everyone at this electrifying event! 🌐\n\nDon't miss out on this unique opportunity to unleash your inner innovator and make lasting memories at UChicago's Uncommon Hacks! Register now and let the magic begin. ✨"

    },
    {
      title: "Meet CS Faculty!",
      __id__: "F1uNiQ1FF4AwLE5UXQXM",
      date: "04/29/2023",
      imageUrl: "/eventPosters/event2.jpg",
      location: "CSIL",
      time: "10:00 AM",
      description: "🎉 Get ready for an unforgettable experience at Uncommon Hacks, the most extraordinary hackathon at UChicago! 🚀\n\nTaking place in the heart of the prestigious University of Chicago campus, Uncommon Hacks is a one-of-a-kind, 48-hour marathon of innovation, creativity, and technology. This event is custom-tailored for trailblazers, pioneers, and mavericks who dare to think outside the box and turn the wildest of ideas into reality. 💡\n\nAt Uncommon Hacks, you will:\n👥 Network with a diverse and brilliant community of fellow hackers, tech enthusiasts, and industry professionals.\n🧠 Expand your skillset through interactive workshops and mentorship from leading experts in various fields.\n🏆 Compete for amazing prizes and bragging rights as you showcase your groundbreaking projects to a panel of distinguished judges.\n🌟 Gain inspiration from keynote speakers who have made their mark in the technology industry and beyond.\n🍕 Enjoy non-stop sustenance, fun, and camaraderie with your fellow participants throughout the entire weekend.\n\nCome join us at Uncommon Hacks, and embark on a thrilling adventure that will challenge you to push the boundaries of what's possible. Whether you're a seasoned hacker, a coding novice, or simply curious about the tech world, there's something for everyone at this electrifying event! 🌐\n\nDon't miss out on this unique opportunity to unleash your inner innovator and make lasting memories at UChicago's Uncommon Hacks! Register now and let the magic begin. ✨"

    },
    {
      title: "1984: Film Showing",
      __id__: "Lh7VcpYZu9WOaESbQ6Rp",
      date: "03/30/2023",
      imageUrl: "/eventPosters/event1.jpg",
      location: "Max P Theater",
      time: "11:00 PM",
      description: "🎉 Get ready for an unforgettable experience at Uncommon Hacks, the most extraordinary hackathon at UChicago! 🚀\n\nTaking place in the heart of the prestigious University of Chicago campus, Uncommon Hacks is a one-of-a-kind, 48-hour marathon of innovation, creativity, and technology. This event is custom-tailored for trailblazers, pioneers, and mavericks who dare to think outside the box and turn the wildest of ideas into reality. 💡\n\nAt Uncommon Hacks, you will:\n👥 Network with a diverse and brilliant community of fellow hackers, tech enthusiasts, and industry professionals.\n🧠 Expand your skillset through interactive workshops and mentorship from leading experts in various fields.\n🏆 Compete for amazing prizes and bragging rights as you showcase your groundbreaking projects to a panel of distinguished judges.\n🌟 Gain inspiration from keynote speakers who have made their mark in the technology industry and beyond.\n🍕 Enjoy non-stop sustenance, fun, and camaraderie with your fellow participants throughout the entire weekend.\n\nCome join us at Uncommon Hacks, and embark on a thrilling adventure that will challenge you to push the boundaries of what's possible. Whether you're a seasoned hacker, a coding novice, or simply curious about the tech world, there's something for everyone at this electrifying event! 🌐\n\nDon't miss out on this unique opportunity to unleash your inner innovator and make lasting memories at UChicago's Uncommon Hacks! Register now and let the magic begin. ✨"

    },
    {
      title: "Competitive Coding",
      __id__: "P6DpzZGEKhT60lOq0Wbp",
      date: "03/31/2023",
      imageUrl: "/eventPosters/event6.jpg",
      location: "CSIL",
      time: "02:00 PM",
      description: "🎉 Get ready for an unforgettable experience at Uncommon Hacks, the most extraordinary hackathon at UChicago! 🚀\n\nTaking place in the heart of the prestigious University of Chicago campus, Uncommon Hacks is a one-of-a-kind, 48-hour marathon of innovation, creativity, and technology. This event is custom-tailored for trailblazers, pioneers, and mavericks who dare to think outside the box and turn the wildest of ideas into reality. 💡\n\nAt Uncommon Hacks, you will:\n👥 Network with a diverse and brilliant community of fellow hackers, tech enthusiasts, and industry professionals.\n🧠 Expand your skillset through interactive workshops and mentorship from leading experts in various fields.\n🏆 Compete for amazing prizes and bragging rights as you showcase your groundbreaking projects to a panel of distinguished judges.\n🌟 Gain inspiration from keynote speakers who have made their mark in the technology industry and beyond.\n🍕 Enjoy non-stop sustenance, fun, and camaraderie with your fellow participants throughout the entire weekend.\n\nCome join us at Uncommon Hacks, and embark on a thrilling adventure that will challenge you to push the boundaries of what's possible. Whether you're a seasoned hacker, a coding novice, or simply curious about the tech world, there's something for everyone at this electrifying event! 🌐\n\nDon't miss out on this unique opportunity to unleash your inner innovator and make lasting memories at UChicago's Uncommon Hacks! Register now and let the magic begin. ✨"

    },
    {
      title: "Art Competition",
      __id__: "TRwUffYzJwkyzl4n7YWR",
      date: "07/15/2023",
      imageUrl: "/eventPosters/event7.jpg",
      location: "Reynolds Club",
      time: "03:00 PM",
      description: "🎉 Get ready for an unforgettable experience at Uncommon Hacks, the most extraordinary hackathon at UChicago! 🚀\n\nTaking place in the heart of the prestigious University of Chicago campus, Uncommon Hacks is a one-of-a-kind, 48-hour marathon of innovation, creativity, and technology. This event is custom-tailored for trailblazers, pioneers, and mavericks who dare to think outside the box and turn the wildest of ideas into reality. 💡\n\nAt Uncommon Hacks, you will:\n👥 Network with a diverse and brilliant community of fellow hackers, tech enthusiasts, and industry professionals.\n🧠 Expand your skillset through interactive workshops and mentorship from leading experts in various fields.\n🏆 Compete for amazing prizes and bragging rights as you showcase your groundbreaking projects to a panel of distinguished judges.\n🌟 Gain inspiration from keynote speakers who have made their mark in the technology industry and beyond.\n🍕 Enjoy non-stop sustenance, fun, and camaraderie with your fellow participants throughout the entire weekend.\n\nCome join us at Uncommon Hacks, and embark on a thrilling adventure that will challenge you to push the boundaries of what's possible. Whether you're a seasoned hacker, a coding novice, or simply curious about the tech world, there's something for everyone at this electrifying event! 🌐\n\nDon't miss out on this unique opportunity to unleash your inner innovator and make lasting memories at UChicago's Uncommon Hacks! Register now and let the magic begin. ✨"

    },
    {
      title: "A Town Hall with Richard Thaler",
      __id__: "X7gZsNhtgGEI4jhWiNVS",
      date: "04/30/2023",
      imageUrl: "/eventPosters/event3.jpg",
      location: "Saieh",
      time: "09:30 AM",
      description: "🎉 Get ready for an unforgettable experience at Uncommon Hacks, the most extraordinary hackathon at UChicago! 🚀\n\nTaking place in the heart of the prestigious University of Chicago campus, Uncommon Hacks is a one-of-a-kind, 48-hour marathon of innovation, creativity, and technology. This event is custom-tailored for trailblazers, pioneers, and mavericks who dare to think outside the box and turn the wildest of ideas into reality. 💡\n\nAt Uncommon Hacks, you will:\n👥 Network with a diverse and brilliant community of fellow hackers, tech enthusiasts, and industry professionals.\n🧠 Expand your skillset through interactive workshops and mentorship from leading experts in various fields.\n🏆 Compete for amazing prizes and bragging rights as you showcase your groundbreaking projects to a panel of distinguished judges.\n🌟 Gain inspiration from keynote speakers who have made their mark in the technology industry and beyond.\n🍕 Enjoy non-stop sustenance, fun, and camaraderie with your fellow participants throughout the entire weekend.\n\nCome join us at Uncommon Hacks, and embark on a thrilling adventure that will challenge you to push the boundaries of what's possible. Whether you're a seasoned hacker, a coding novice, or simply curious about the tech world, there's something for everyone at this electrifying event! 🌐\n\nDon't miss out on this unique opportunity to unleash your inner innovator and make lasting memories at UChicago's Uncommon Hacks! Register now and let the magic begin. ✨"

    },
    {
      title: "Logan Annual Art Exibit",
      __id__: "w4qly2FKkaHmssT1EV7W",
      date: "05/01/2023",
      imageUrl: "/eventPosters/event4.jpg",
      location: "Logan Hall",
      time: "10:00 AM",
      description: "🎉 Get ready for an unforgettable experience at Uncommon Hacks, the most extraordinary hackathon at UChicago! 🚀\n\nTaking place in the heart of the prestigious University of Chicago campus, Uncommon Hacks is a one-of-a-kind, 48-hour marathon of innovation, creativity, and technology. This event is custom-tailored for trailblazers, pioneers, and mavericks who dare to think outside the box and turn the wildest of ideas into reality. 💡\n\nAt Uncommon Hacks, you will:\n👥 Network with a diverse and brilliant community of fellow hackers, tech enthusiasts, and industry professionals.\n🧠 Expand your skillset through interactive workshops and mentorship from leading experts in various fields.\n🏆 Compete for amazing prizes and bragging rights as you showcase your groundbreaking projects to a panel of distinguished judges.\n🌟 Gain inspiration from keynote speakers who have made their mark in the technology industry and beyond.\n🍕 Enjoy non-stop sustenance, fun, and camaraderie with your fellow participants throughout the entire weekend.\n\nCome join us at Uncommon Hacks, and embark on a thrilling adventure that will challenge you to push the boundaries of what's possible. Whether you're a seasoned hacker, a coding novice, or simply curious about the tech world, there's something for everyone at this electrifying event! 🌐\n\nDon't miss out on this unique opportunity to unleash your inner innovator and make lasting memories at UChicago's Uncommon Hacks! Register now and let the magic begin. ✨"

    },
  ];
}
