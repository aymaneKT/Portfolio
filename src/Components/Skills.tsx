import { Fade } from "react-awesome-reveal";
import ShadowDiv from "./ShadowDiv";
import { Element } from "react-scroll";
export default function Skills() {
  return (
    <Element name="Skills">
      <div className="p-8 relative my-[10rem]">
        <ShadowDiv />
        <h1 className="inline-block font-[Audiowide] text-white font-bold text-3xl relative left-[10%]">
          SKILLS
        </h1>
        <h3 className="text-white text-xl mt-[2rem] font-[Orbitron] text-center">
          The skills, tools and technologies I use:
        </h3>

        <Fade direction="left" duration={1500} triggerOnce>
          <div className="flex gap-7 justify-center mt-7">
            <img
              className="max-[500px]:w-[45px] w-[55px] h-[55px] hover:drop-shadow-[0px_0px_15px_#E44D26] transition duration-250 ease-in-out"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              alt="HTML5"
            />

            <img
              className="max-[500px]:w-[45px] w-[55px] h-[55px] hover:drop-shadow-[0px_0px_15px_#2965F1] transition duration-250 ease-in-out"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              alt="CSS3"
            />

            <img
              className="max-[500px]:w-[45px] w-[55px] h-[55px] hover:drop-shadow-[0px_0px_15px_#38BDF8] transition duration-250 ease-in-out"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              alt="Tailwind CSS"
            />

            <img
              className="max-[500px]:w-[45px] w-[55px] h-[55px] hover:drop-shadow-[0px_0px_15px_#F7DF1E] transition duration-250 ease-in-out"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              alt="JavaScript"
            />
            <img
              className="max-[500px]:w-[45px] w-[55px] h-[55px] hover:drop-shadow-[0px_0px_15px_#3178C6] transition duration-250 ease-in-out"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              alt="TypeScript"
            />
          </div>
        </Fade>

        <Fade direction="right" duration={1500} triggerOnce>
          <div className="flex gap-7 justify-center mt-7">
            <img
              className="max-[500px]:w-[45px] w-[55px] h-[55px] hover:drop-shadow-[0px_0px_15px_#61DAFB] transition duration-250 ease-in-out"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              alt="React"
            />
            <img
              className="max-[500px]:w-[45px] w-[55px] h-[55px] hover:drop-shadow-[0px_0px_15px_#F1502F] transition duration-250 ease-in-out"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
              alt="Git"
            />
            <img
              className="max-[500px]:w-[45px] w-[55px] h-[55px] hover:drop-shadow-[0px_0px_15px_#CB3837] transition duration-250 ease-in-out"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
              alt="NPM"
            />
            <img
              className="max-[500px]:w-[45px] w-[55px] h-[55px] hover:drop-shadow-[0px_0px_15px_#fff] transition duration-250 ease-in-out invert"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
              alt="GitHub"
            />
          </div>
        </Fade>
        <Fade direction="left" duration={1500} triggerOnce>
          <div className="flex gap-7 justify-center mt-7">
            <img
              className="w-[12vw] max-w-[55px] min-w-[35px] h-auto hover:drop-shadow-[0px_0px_15px_#336791] transition duration-250 ease-in-out"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
              alt="SQL"
            />
            <img
              className="w-[12vw] max-w-[55px] min-w-[35px] h-auto hover:drop-shadow-[0px_0px_15px_#339933] transition duration-250 ease-in-out"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
              alt="Node.js"
            />
            <img
              className="w-[12vw] max-w-[55px] min-w-[35px] h-auto filter invert hover:drop-shadow-[0px_0px_15px_#fff] transition duration-250 ease-in-out"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
              alt="Express.js"
            />
          </div>
        </Fade>
      </div>
    </Element>
  );
}
