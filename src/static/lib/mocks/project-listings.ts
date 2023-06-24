import { IProject } from "@/types/common-interfaces"

export const PROJECTS: IProject[] = [
  {
    title: 'LNMIIT Physics Lab Website',
    projectLink: 'https://aashish157.github.io/lnmiit-physics-lab/',
    description: 'A responsive static website designed for the Undergraduate (UG) Physics Lab at LNMIIT. The website serves as a convenient platform for students to access experiment videos, theory content, Q&A sections, and the lab\'s timetable. The site was built using HTML, CSS, Bootstrap, and jQuery technologies, ensuring a user-friendly interface.',
    repositoryLink: 'https://github.com/aashish157/lnmiit-physics-lab',
    image: 'lnmiit-physics-lab.png',
  },
  {
    title: 'QTrip — Adventure Booking Web Application',
    projectLink: 'https://qtrip-dynamic-arg.netlify.app/',
    description: 'An interactive web application designed for booking adventures. The website showcases various cities, adventures, and their details, providing users with the ability to make reservations for their desired activities. Built with JavaScript, HTML, CSS, and Bootstrap, the site offers a dynamic and responsive experience. Unit tests were implemented using the Jest framework to ensure code quality and reliability.',
    image: 'qtrip-dynamic.png',

  },
  {
    title: 'XBoard — News Feed Website',
    projectLink: 'https://news-feed-arg.netlify.app/',
    description: 'A news feed website that provides the latest news on selected topics. The site implements design requirements based on a Figma file. Built with JavaScript, HTML, CSS, and Bootstrap, it offers a responsive and visually appealing interface. Users can stay updated with news articles on various topics.',
    image: 'crio-news-feed.png',
  },
  {
    title: 'Credit Card Fraud Detection — ML Classification Model',
    projectLink: 'https://github.com/aashish157/Credit-Card-Fraud-Detection',
    description: 'A Gaussian Naive Bayes ML classifier to classify credit card transactions as genuine or fraudulent. Credit card fraud detection dataset from kaggle (https://www.kaggle.com/mlg-ulb/creditcardfraud) was used in developing this project.',
    repositoryLink: 'https://github.com/aashish157/Credit-Card-Fraud-Detection',
    image: 'cc-fraud-detection.png',
  },
  {
    title: 'New House Price Prediction — ML Regression Model',
    projectLink: 'https://github.com/aashish157/New-House-Price-Prediction',
    description: 'A Linear Regression ML model to predict the monetary value of a new house. Boston house price dataset was used in developing this project.',
    repositoryLink: 'https://github.com/aashish157/New-House-Price-Prediction',
    image: 'new-house-price-prediction.png',
  },
]