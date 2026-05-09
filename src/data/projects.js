import { text } from "framer-motion/client";

export const projects = [
  {
    id: "parcel-management",
    title: "Parcel Management System",
    tech: "JavaScript, Node.js, Tailwind, PostgreSQL",
    year: 2026,
    type: "development",
    image1: "images/pms1.png",
    image2: "images/pms2.png",

    description:
      "A web-based system built to help parcel hubs manage daily parcel operations faster and more efficiently.",

    text1:
      "Parcel Management System is designed for parcel hubs that handle large volumes of daily parcels. It helps staff record incoming parcels, organize them by rack, and manage parcel status in a more structured way.",

    text2:
      "The system supports barcode-based parcel registration, rack allocation, parcel handout tracking, and staff activity records. This reduces manual work and helps the hub process parcels more quickly.",

    text3:
      "The project also includes parcel search, reporting, and customer-facing parcel checking features. These features make it easier for staff and users to track parcels, reduce confusion, and improve daily operation flow.",
  },
  {
    id: "evergreen-home",
    title: "Evergreen Home",
    tech: "Flutter, Dart, Arduino, IoT",
    year: 2026,
    type: "development",
    image1: "images/evghm1.png",
    image2: "images/evghm2.png",

    description:
      "A mobile-based smart watering system built to help users monitor and control plant watering more easily using IoT.",

    text1:
      "Evergreen Home is designed for users who want to manage plant watering in a smarter and more convenient way. The system connects a Flutter mobile app with an Arduino-based IoT device to monitor plant conditions and control watering remotely.",

    text2:
      "The app allows users to switch between manual mode and auto mode, water the plant directly from the app, and monitor important plant data such as soil moisture percentage, temperature, and humidity.",

    text3:
      "The system also shows the last watered time and soil dampness level, helping users understand the plant’s current condition. These features make plant care easier, reduce the need for manual checking, and support more consistent watering."
  }, {
    id: "medaltask",
    title: "MedalTask",
    tech: "Flutter, Dart, Firebase",
    year: 2025,
    type: "development",
    image1: "images/mt1.png",
    image2: "images/mt2.png",

    description:
      "A mobile task management app that motivates users to complete tasks through points, streaks, rewards, and medals.",

    text1:
      "MedalTask is designed to help users stay consistent with their daily tasks by turning task completion into a reward-based experience. Users can create and track tasks, then earn points whenever they complete them.",

    text2:
      "The app includes a streak system that gives bonus points based on the user’s completion streak. The longer the streak, the more rewarding each completed task becomes, encouraging users to build consistent habits.",

    text3:
      "Points earned from completed tasks are used to fill a reward bar. Once the reward bar is full, users receive a medal, which can then be used as a personal reward system to treat themselves for their progress."
  },
  {
    id: "nutriscan",
    title: "NutriScan",
    tech: "HTML, CSS, JavaScript",
    year: 2025,
    type: "development",
    image1: "images/ns1.png",
    image2: "images/ns2.png",

    description:
      "A web-based malnutrition screening system that uses decision-tree logic to assess children aged 5 years and below.",

    text1:
      "NutriScan is designed to help users perform an early malnutrition assessment for children under 5 years old. The system collects key child information such as age, gender, weight, height, MUAC, and visible symptoms through a guided web form.",

    text2:
      "The system uses decision-tree logic, a rule-based approach that follows structured conditions similar to how a computer makes decisions. Based on the entered data and symptoms, it analyzes the child’s condition and classifies the possible malnutrition type.",

    text3:
      "NutriScan displays the assessment result with details such as risk score, confidence level, related symptoms, and recommended action. This helps users identify possible malnutrition signs earlier and decide whether urgent referral or further checking is needed."
  },
  // {
  //   id: "qylexgames",
  //   title: "QylexGames",
  //   tech: "JavaScript, React, Tailwind, PostgreSQL",
  //   year: 2026,
  //   type: "development",
  //   image1: "images/qylex.png",
  //   description: "Gaming platform...",
  //   text1:
  //     "A gaming top-up platform with product listings, checkout flow, and admin management features.",
  //   text2:
  //     "The platform supports multiple product types, payment methods, package pricing, and supplier mapping.",
  //   text3:
  //     "Users can browse games, purchase top-ups, and manage their accounts seamlessly.",
  // },
];