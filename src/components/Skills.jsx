import React from "react";

import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiMongodb,
  SiPython,
  SiMysql,
  SiRedux,
  SiGithub,
  SiFirebase,
  SiNodedotjs,
  SiExpress,
  SiMongoose,
  SiPostman,
  SiNpm,
  SiGit,
} from "react-icons/si";

const Skills = () => {
const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "orange" },
  { name: "CSS", icon: <FaCss3Alt />, color: "blue" },
  { name: "JavaScript", icon: <SiJavascript />, color: "yellow" },
  { name: "React", icon: <SiReact />, color: "skyblue" },
  { name: "Redux", icon: <SiRedux />, color: "purple" }, 
  { name: "MongoDB", icon: <SiMongodb />, color: "green" },
  // { name: "MySQL", icon: <SiMysql />, color: "teal" },
  { name: "Python", icon: <SiPython />, color: "royalblue" },
  { name: "GitHub", icon: <SiGithub />, color: "black" },
  { name: "Firebase", icon: <SiFirebase />, color: "orange" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "purple" },
  { name: "Express", icon: <SiExpress />, color: "green" },
  { name: "Mongoose", icon: <SiMongoose />, color: "maroon" },
  { name: "Postman", icon: <SiPostman/>, color: "Orange" },
  { name: "NPM", icon: <SiNpm/>, color: "Maroon" },
  { name: "Git", icon: <SiGit />, color: "#de4c35" },
  { name: "GitHub", icon: <SiGithub/>, color: "black" },
  
];


  return (
    <section id="skills" className="min-h-screen px-6 py-20 mt-4">
      <h1 className="text-4xl font-bold text-center mb-12 dark:text-white">
        My Skills
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-6 rounded-xl shadow-lg transform transition-transform hover:-translate-y-2 dark:bg-gray-800 dark:text-white"
          >
            <div
              className="text-6xl mb-4 flex justify-center"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>
            <p className="text-xl font-medium text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
