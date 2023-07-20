import {
  skill1,
  skill2,
  skill3,
  skill4,
  skill5,
  skill6,
} from "@/public/assets/images";
import SkillBox from "./SkillBox";

const Skills = () => {
  const skills = {
    programming_language: [
      "C++",
      "C#",
      "Java",
      "Ruby",
      "Javascript",
      "ES6",
      "PHP",
    ],
    javaScript_library: [
      "React Js",
      "React Native",
      "Next Js",
      "Jquery",
      "Knockout Js",
      "Chart Js",
      "AJAX",
      "Map API",
      "JWT",
    ],
    frontend: [
      "HTML5",
      "CSS3",
      "SASS",
      "Tailwind CSS",
      "Bootstrap",
      "MUI",
      "JSON",
    ],
    backend: ["Express Js", "MongoDB", "Firebase", "MySQL", "Rest API"],
    tools: [
      "VS Code",
      "Visual Studio",
      "Android Studio",
      "Github",
      "Figma",
      "Zoho Sprint",
    ],
    languages: ["English", "Spanish", "German", "Hindi"],
  };

  const {
    programming_language,
    javaScript_library,
    frontend,
    backend,
    tools,
    languages,
  } = skills;

  return (
    <div className="mt-20">
      <div className="header text-center mb-5">
        <div className="main-title text-xl text-[#f5f5f5] font-bold capitalize">
          skills
        </div>
        <div className="line bg-[#333] w-[60px] h-[2px] mx-auto mt-1">
          <div className="bg-blue-500 w-[30px] h-[2px]"></div>
        </div>
      </div>
      <div className="content 2xl:w-3/4 xl:w-[90%] mx-auto lg:grid grid-cols-2 gap-10 mt-10">
        <SkillBox
          icon={skill1}
          title="programming"
          skill={programming_language}
        />
        <SkillBox icon={skill2} title="javascript" skill={javaScript_library} />
        <SkillBox icon={skill3} title="frontend" skill={frontend} />
        <SkillBox icon={skill4} title="backend" skill={backend} />
        <SkillBox icon={skill5} title="tools" skill={tools} />
        <SkillBox icon={skill6} title="languages" skill={languages} />
      </div>
    </div>
  );
};

export default Skills;
