import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import csharpLogo from "./assets/tech_logo/csharp.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import wordpressLogo from "./assets/tech_logo/wordpress.png";
import edusphereLogo from "./assets/Project_logo/edusphereLogo.png";
import gadgetGridImage from "./assets/Project_logo/gadgetGridImage.png";
import blissfullHome from "./assets/Project_logo/blissfullHome.png";
import beanHome from "./assets/project_images/BeanBliss/homepage.png";
import AndroidStudio from './assets/tech_logo/AndroidStudio.png'
import homepage from './assets/project_images/RoseGarden/homepage.png'
import RoseGarden from './assets/project_images/RoseGarden/RoseGarden.pdf'

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
      { name: "WordPress", logo: wordpressLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "C-Sharp", logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Figma", logo: figmaLogo },
      { name: "Android Studio", logo: AndroidStudio },
    ],
  },
];

// json data
export const projects = [
  {
    id: 0,
    title: "EduSphere – LMS Platform",
    description:
      "A full-featured Learning Management System built with the MERN stack. Supports user and admin roles, course browsing, quiz-taking, certification, and secure Stripe payment. Admin panel includes full CRUD functionality for managing users, courses, and quizzes.",
    image: edusphereLogo, // import your image at the top
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Stripe"],
    github: "https://github.com/AnnaAshok/Capstone-Group-4/tree/main/client", // replace if available
    webapp: "https://edusphere-murex.vercel.app/",
  },
  {
    id: 1,
    title: "Gadget Grid",
    description:
      "A WordPress-based eCommerce website focused on showcasing and selling the latest gadgets. This project includes custom-built pages such as Home, Products, and Contact Us, along with a custom plugin named 'Custom Page Gadget' for enhanced layout control and user experience.",
    image: gadgetGridImage, // replace with actual image import
    tags: ["WordPress", "WooCommerce", "PHP", "HTML", "CSS", "Custom Plugin"],
    github: "", // leave empty if not applicable
    webapp: "https://gadgetgrid.42web.io/wordpress-6.6.2/wordpress/", // use real link if available
  },
  {
    id: 2,
    title: "Blissful Home",
    description:
      "A WordPress-based eCommerce website focused on selling stylish and modern home décor products.  Key functionalities include product filtering widgets, PDF invoice downloads, and a 'Cash on Delivery' payment option for customer convenience.",
    image: blissfullHome, // replace with actual import path
    tags: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "HTML",
      "CSS",
      "Home Decor",
      "Custom Plugin",
    ],
    github: "https://github.com/Rajni287213/WordpressProjects", // Leave empty or link if you pushed theme/plugin code
    webapp: "http://localhost:5173/BlissfullHome",
  },

    {
    id: 3,
    title: "Bean Bliss",
    description:
      "A responsive Coffee Shop website built using HTML, CSS, and JavaScript. Features include an interactive menu, animated UI elements, and responsive forms for user interaction such as order placement and contact.",
     image: beanHome, // replace with actual import path
    tags: [
      "HTML", "CSS", "JavaScript", "Responsive Design", "Coffee Shop",
    ],
    github: "https://github.com/Rajni287213/ResponsiveWebsiteProjects/tree/main/Coffee Shop", // Leave empty or link if you pushed theme/plugin code
    webapp: "http://localhost:5173/Beanbliss",
  },
  {
  id: 4,
  title: "Rose Garden",
  description:
    "A responsive gardening website created with HTML, CSS. It features sections for showcasing different plants, gardening tips, and a working contact form. Designed with a clean and nature-inspired layout to promote green living.",
  image: homepage, // replace with actual image import
  tags: ["HTML", "CSS", "Responsive Design", "Gardening", "Contact Form"],
  github: "https://github.com/Rajni287213/ResponsiveWebsiteProjects/tree/main/Garden Website", // update if needed
  webapp: "http://localhost:5173/Beanbliss", // update if deployed
},
  // {
  //   id: 1,
  //   title: "CS Prep",
  //   description:
  //     "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
  //   image: csprepLogo,
  //   tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
  //   github: "https://github.com/codingmastr/CSPrep",
  //   webapp: "https://csprep.netlify.app/",
  // },
  // {
  //   id: 2,
  //   title: "Movie Recommendation App",
  //   description:
  //     "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
  //   image: movierecLogo,
  //   tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
  //   github: "https://github.com/codingmastr/Movie-Recommendation-App",
  //   webapp: "https://movie-recommendation-app-jet.vercel.app/",
  // },
  // {
  //   id: 3,
  //   title: "Email Validator NPM Package",
  //   description:
  //     "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
  //   image: npmLogo,
  //   tags: ["React JS", "Node.js", "NPM", "Validation"],
  //   github: "https://github.com/codingmastr/cmtk-email-validator",
  //   webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  // },
  // {
  //   id: 4,
  //   title: "Task Reminder Chrome Extension Tool",
  //   description:
  //     "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
  //   image: taskremLogo,
  //   tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
  //   github: "https://github.com/codingmastr/Task-Reminder-Tool",
  //   webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  // },
  // {
  //   id: 5,
  //   title: "Webverse Digital",
  //   description:
  //     "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
  //   image: webverLogo,
  //   tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
  //   github: "https://github.com/codingmastr/Webverse-Digital",
  //   webapp: "https://webversedigital.com/",
  // },
  // {
  //   id: 6,
  //   title: "Coding Master",
  //   description:
  //     "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
  //   image: cmLogo,
  //   tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
  //   github: "https://codingmasterweb.in/",
  //   webapp: "https://codingmasterweb.in/",
  // },
  // {
  //   id: 7,
  //   title: "Image Search App",
  //   description:
  //     "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
  //   image: imagesearchLogo,
  //   tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
  //   github: "https://github.com/codingmastr/Image-Search-App",
  //   webapp: "https://imagsearch.netlify.app/",
  // },
  // {
  //   id: 8,
  //   title: "Image Background Remover",
  //   description:
  //     "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
  //   image: removebgLogo,
  //   tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
  //   github: "https://github.com/codingmastr/Image-Background-Remover",
  //   webapp: "https://removeyourbg.netlify.app/",
  // },
];
