import { Fade } from "react-awesome-reveal";
import ShadowDiv from "./ShadowDiv";

export default function Skills() {
  return (
    <div className="p-8 relative my-9">
      <ShadowDiv />
      <h1 className="inline-block font-[Audiowide] text-white font-bold text-3xl relative left-[10%]">
        SKILLS
      </h1>
      <h3 className="text-white text-2xl mt-[2rem] font-[Orbitron] text-center">
        The skills , tools and technologies I use :
      </h3>
      <Fade direction="left" duration={1500} triggerOnce delay={2000}>
        <div className="flex gap-7 justify-center mt-7">
          <img
            className="w-[55px] h-[55px] hover:drop-shadow-[0px_0px_15px_#E44D26] transition duration-250 ease-in-out"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            alt="HTML5"
          />

          <img
            className="w-[55px] h-[55px] hover:drop-shadow-[0px_0px_15px_#2965F1] transition duration-250 ease-in-out"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            alt="CSS3"
          />

          <img
            className="w-[55px] h-[55px] hover:drop-shadow-[0px_0px_15px_#38BDF8] transition duration-250 ease-in-out"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            alt="Tailwind CSS"
          />

          <img
            className="w-[55px] h-[55px] hover:drop-shadow-[0px_0px_15px_#F7DF1E] transition duration-250 ease-in-out"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            alt="JavaScript"
          />

          <img
            className="w-[55px] h-[55px] hover:drop-shadow-[0px_0px_15px_#3178C6] transition duration-250 ease-in-out"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            alt="TypeScript"
          />
        </div>
      </Fade>
      <Fade direction="right" duration={1500} triggerOnce delay={2000}>
        <div className="flex gap-7 justify-center mt-7">
          <img
            className="w-[55px] h-[55px] hover:drop-shadow-[0px_0px_15px_#61DAFB] transition duration-250 ease-in-out"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            alt="React"
          />

          <img
            className="w-[55px] h-[55px] hover:drop-shadow-[0px_0px_15px_#F1502F] transition duration-250 ease-in-out"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
            alt="Git"
          />

          <img
            className="w-[55px] h-[55px] hover:drop-shadow-[0px_0px_15px_#CB3837] transition duration-250 ease-in-out"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
            alt="NPM"
          />

          <img
            className="w-[55px] h-[55px] invert hover:drop-shadow-[0px_0px_15px_#fff] transition duration-250 ease-in-out"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
            alt="GitHub"
          />
        </div>
      </Fade>
    </div>
  );
}
