import { Fade } from "react-awesome-reveal";
import ShadowDiv from "./ShadowDiv";

export default function Skills() {
  const firstSetOfSkills = [
    {
      src:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      alt: "HTML5",
      hoverColor: "#E44D26",
    },
    {
      src:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      alt: "CSS3",
      hoverColor: "#2965F1",
    },
    {
      src:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      alt: "Tailwind CSS",
      hoverColor: "#38BDF8",
    },
    {
      src:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      alt: "JavaScript",
      hoverColor: "#F7DF1E",
    },
    {
      src:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      alt: "TypeScript",
      hoverColor: "#3178C6",
    },
  ];

  const secondSetOfSkills = [
    {
      src:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      alt: "React",
      hoverColor: "#61DAFB",
    },
    {
      src:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      alt: "Git",
      hoverColor: "#F1502F",
    },
    {
      src:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
      alt: "NPM",
      hoverColor: "#CB3837",
    },
    {
      src:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      alt: "GitHub",
      hoverColor: "#fff",
      invert: true,
    },
  ];

  return (
    <div className="p-8 relative my-[7rem]" id="Skills">
      <ShadowDiv />
      <h1 className="inline-block font-[Audiowide] text-white font-bold text-3xl relative left-[10%]">
        SKILLS
      </h1>
      <h3 className="text-white text-2xl mt-[2rem] font-[Orbitron] text-center">
        The skills, tools and technologies I use:
      </h3>
      <Fade direction="left" duration={1500} triggerOnce>
        <div className="flex gap-7 justify-center mt-7">
          {firstSetOfSkills.map((skill) => (
            <img
              key={skill.alt}
              className={`max-[500px]:w-[45px] max-[500px]:w-[45px] w-[55px] h-[55px] hover:drop-shadow-[0px_0px_15px_${skill.hoverColor}] transition duration-250 ease-in-out`}
              src={skill.src}
              alt={skill.alt}
            />
          ))}
        </div>
      </Fade>

      <Fade direction="right" duration={1500} triggerOnce>
        <div className="flex gap-7 justify-center mt-7">
          {secondSetOfSkills.map((skill) => (
            <img
              key={skill.alt}
              className={`max-[500px]:w-[45px] max-[500px]:w-[45px] w-[55px] h-[55px] hover:drop-shadow-[0px_0px_15px_${
                skill.hoverColor
              }] transition duration-250 ease-in-out ${
                skill.invert ? "invert" : ""
              }`}
              src={skill.src}
              alt={skill.alt}
            />
          ))}
        </div>
      </Fade>
    </div>
  );
}
