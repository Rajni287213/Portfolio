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
import bookstore from './assets/project_images/BookStore/books.png'
import HomeDecor from './assets/project_images/HomeDecor/HomeDecor.png'
import RoseGarden from './assets/project_images/RoseGarden/RoseGarden.pdf'
import Fashion from './assets/project_images/Fashion/HomePage.png'


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
  webapp: "http://localhost:5173/RoseGarden", // update if deployed
},
 {
  id: 5,
  title: "Book Store",
  description:
     "A dynamic Book Store web application built using ASP.NET Web Forms (.aspx) with C# and SQL Server integration via Server Explorer. The application enables users to view, add, and manage book listings. It supports multiple genres including Biography, Fantasy, Fiction, History, and So on. The UI is responsive and includes database connectivity and a working contact form.",
 image: bookstore,
  tags: ["ASP.NET", "C#", "SQL Server", "Web Forms", "Responsive Design", "Login Form"],
  github: "https://github.com/Rajni287213/ResponsiveWebsiteProjects/tree/main/Garden Website", // update if you have a new .NET repo
  webapp: "http://localhost:5173/Bookstore", // replace with deployed link or remove if not deployed
},

{
  id: 6,
  title: "Home Decor",
  description:
     "A stylish Home Decor website developed using ASP.NET Web Forms (.aspx) with C# and SQL Server for backend data management. The site features a responsive design showcasing various decor products and collections, enabling users to browse, explore categories, and contact for inquiries. Includes database connectivity and a functional contact form.",
  image: HomeDecor,
   tags: ["ASP.NET", "C#", "SQL Server", "Web Forms", "Responsive Design", "Login Form"],
  github: "https://github.com/Rajni287213/DotNetProjects/tree/main/Home Decor", // update if you have a new .NET repo
  webapp: "http://localhost:5173/HomeDecor", // replace with deployed link or remove if not deployed
},

{
  id: 7,
  title: "Fashion",
  description:
     "A visually appealing Fashion and Jewelry website developed using ASP.NET MVC with C# and SQL Server for backend management. The platform showcases various fashion accessories and jewelry collections, allowing users to browse products, explore categories. Features responsive design, user-friendly navigation, and secure login functionality.", 
   image: Fashion,
   tags: ["ASP.NET", "C#", "SQL Server", "MVC", "Responsive Design", "Login Form"],
  github: "https://github.com/Rajni287213/DotNetProjects/tree/main/Fashion Project", // update if you have a new .NET repo
  webapp: "http://localhost:5173/Fashion", // replace with deployed link or remove if not deployed
}

];
