import geekChartrInfo from "../assets/geekchartrarchitecture.webp";

export default {
  storefront: {
    title: "Store Demo",
    img: "",
    alt: "",
    summary:
      "This was my first attempt at a major front-end framework project using React, reinforcing fundemental concepts like working with React's components and functional hooks.",
    learned:
      "This was my first time using React Context to create a functioning cart (avoiding prop-drilling) and front-end routing. I also learned the basics of handling a cloud-database and SASS, as opposed to vanilla CSS.",
    change:
      "Currently the project is very simplistic and could be expanded upon to be a proper e-commerce demo. I would give each shop item its own page (dynamic routing) when clicked, proper filtering, product search, and calculating the total cost of each product in the cart.",
  },
  jobrunner: {
    title: "JobRunner",
    img: "",
    alt: "",
    summary: "JobRunner is meant to be a fullstack showcase web app.",
    learned:
      "Already from this project i've learned in depth about 'Mocking/Stubbing', Authentication, enforcing permissions and using persistant data storage.",
    change: "As the project is in progress, i'm still implementing core functionality.",
  },
  geekchartr: {
    title: "GeekChartr",
    img: geekChartrInfo,
    alt: "Geek Chartr Architecture",
    summary:
      "Currently, GeekChartr on the frontend simply visualizes BoardGameGeek play data. However it is a fullstack application. Data is carefully scrapped using a python script, on BoardGameGeek.com, where it is stored in a cloud Mongo Database. NodeJS runs the backend on an AWS instance, fetching and preparing the data for the front-end graph display.",
    learned:
      "Deploying and connecting each part of the application was the single biggest learning experience. Building a backend and using MongoDB's 'NoSQL' paradigm were also learning experiences.",
    change:
      "Fleshing out the front-end beyond just a graph, adding search functionality to find and compare different games and some form of logging in to visualize your personal playcounts!",
  },
  portfolio: {
    title: "Portfolio",
    img: "",
    alt: "",
    summary:
      "This site was a complete from scratch rebuild of my old portfolio site, cleaning up the code and design. Overall it took half as much time to develop compared to my first portfolio. Almost everything is vanilla, barring my use of SCSS and a few libraries, JavaScript is used for all the dynamic elements, and this portfolio fully works on mobile & desktop.",
    learned:
      "While this project was mostly an implementation of my existing fundementals, I refreshed skills around web accessibility. I learned some additional skills around deployment and using a custom domain!",
    change: "Not much! After all, a portfolio should be solid 🙂.",
  },
  password: {
    title: "Password Manager",
    img: "",
    alt: "",
    summary:
      "A simple Junior project building software rather than a web application. I kept this project here because I love working with Python!",
    learned: "Basics of reading & writing data in python and building out a software GUI.",
    change:
      "If i went back to this, i think I would try and make it a prettier application, and perhaps implement more complex encryption.",
  },
};
