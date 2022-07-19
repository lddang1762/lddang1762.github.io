import asteroid from "../../icons/asteroid.svg";
import meteor from "../../icons/meteor.svg";
import mercury from "../../icons/mercury.svg";
import saturn from "../../icons/saturn.svg";
import mars from "../../icons/mars.svg";
import uranus from "../../icons/uranus.svg";
import jupiter from "../../icons/jupiter.svg";

export interface Item {
  title: string;
  date: string;
  body: Array<string>;
  icon: string;
}

const Items: Array<Item> = [
  {
    title: "Valencia High School",
    date: "2014-2018",
    body: ["Graduated with a 4.4 Academic GPA"],
    icon: asteroid,
  },
  {
    title: "California State University, Fullerton",
    date: "2018-2021",
    body: ["Bachelors in Computer Science", "Graduated Magna Cum Laude in Computer Science (3.8 GPA)"],
    icon: meteor,
  },
  {
    title: "XDimensional Technologies",
    date: "SUMMER 2017",
    body: [
      "Created a PDF grid and ruler functionality that improved developer efficiency",
      "Analyzed webpage traffic and redesigned popular pages to fit the MVC design pattern",
    ],
    icon: saturn,
  },
  {
    title: "Vinancity",
    date: "2021-PRESENT",
    body: [
      "Designed UI wireframes and webpage prototypes that adhered to the project requirements and maintained a consistent theme and design standard",
      "Implemented approved UI designs into a single page application using component-based design with React, Typescript, and the Mantine component library",
      "Within a small startup team of 3, practiced CI/CD and agile development to build a cryptocurrency portfolio application and continuously deploy with Vercel",
    ],
    icon: mars,
  },
];

export default Items.reverse();
