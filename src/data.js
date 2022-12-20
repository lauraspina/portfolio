import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoLinkedin,
} from "react-icons/io5";

import GithubImage from "./images/github.jpeg";

export const Experience = [
  {
    id: 1,
    date: "2022 - present",
    iconsSrc: <IoCodeWorking />,
    title: "Frontend Developer",
    location: "@Bravoure in Amsterdam, Netherlands",
    description:
      " I work on many projects in the cultural and events scene providing fancy animations and performant code using NextJs, GraphQl, Styled Components and more recently ChrakraUi.",
  },
  {
    id: 2,
    date: "2021 - 2022",
    iconsSrc: <IoCodeWorking />,
    title: "Frontend Developer",
    location: "@openmind in Monza, Italy",
    description:
      "I worked as a frontend developer in one of the company leaders in the e-commerce consultancy market. I've learned how to work with VueJs, JQuery and JSP.",
  },
  {
    id: 3,
    date: "2020-2021",
    iconsSrc: <IoCodeWorking />,
    title: "Full stack development Bootcamp",
    location: "@Talent Garden in Milan, Italy",
    description:
      "I've learned how to create and maintain a development environment and a proper workflow Design a dynamic web application using frontend development frameworks like React. Backend development with NodeJs",
  },
  {
    id: 4,
    date: "2015-2020",
    iconsSrc: <IoCodeWorking />,
    title: "All the possible work experiences",
    location: "Venice, Italy",
    description:
      "I've worked as a waitress, Aribnb host, and photographer before finding my actual career path. I'm grateful fo all the things that I've learned from this jobs and for the qualities that they developed in me.",
  },
  {
    id: 5,
    date: "2010 - 2015",
    iconsSrc: <IoCodeWorking />,
    title: "High School Diploma",
    location: "@Liceo Fanoli in Cittadella, Italy",
    description:
      "Arts and graphic design, Adobe photoshop and Illustrator, Philosophy, History of Arts",
  },
];

export const Projects = [
  {
    id: 1,
    name: "3d portfolio",
    imageSrc: GithubImage,
    techs: "React Js, Spline3D, Firebase",
    github: "https://github.com/lauraspina/movie-app",
  },
  {
    id: 2,
    name: "Rijksmuseum Application",
    imageSrc: GithubImage,
    techs: "Vue Js",
    github: "https://github.com/lauraspina/Rijksmuseum-app",
  },
  {
    id: 3,
    name: "Image Gallery",
    imageSrc: GithubImage,
    techs: "Html, Css, Javascript",
    github: "https://github.com/lauraspina/image-gallery",
  },
  {
    id: 4,
    name: "Pomodoro App",
    imageSrc: GithubImage,
    techs: "Html, Css, Javascript",
    github: "https://github.com/lauraspina/pomodoro-app",
  },
  {
    id: 5,
    name: "Movie App",
    imageSrc: GithubImage,
    techs: "React Js",
    github: "https://github.com/lauraspina/movie-app",
  },
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "https://github.com/lauraspina",
  },
  {
    id: 1,
    iconSrc: <IoLogoYoutube className="text-red-500 text-3xl cursor-pointer" />,
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCbV5SakvzjZmn1szO9PUFOg",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/laura-spina-80aa3b172/",
  },
];
