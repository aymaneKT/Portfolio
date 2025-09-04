import { Fade } from "react-awesome-reveal";
import { Element } from "react-scroll";
import { skillRows } from "./ProjectsArray";
export default function Skills() {
  return (
    <Element name="Skills">
      <div className="p-8 relative my-[10rem]">
        <h1 className="inline-block font-[Audiowide] text-white font-bold text-3xl relative left-[10%]">
          SKILLS
        </h1>
        <h3 className="text-white text-xl mt-[2rem] font-[Orbitron] text-center">
          The skills, tools and technologies I use:
        </h3>

        {skillRows.map((row, rowIndex) => (
          <Fade
            key={rowIndex}
            direction={rowIndex % 2 === 0 ? "left" : "right"}
            duration={1500}
            triggerOnce
          >
            <div className="flex gap-7 justify-center mt-7">
              {row.map(({ src, alt, shadowColor, invert }, i) => (
                <img
                  key={i}
                  src={src}
                  alt={alt}
                  className={`max-[500px]:w-[45px] w-[55px] h-[55px] transition-all duration-300 ease-in-out ${
                    invert ? "invert" : ""
                  }`}
                  style={{
                    filter: invert ? "invert(1)" : "none",
                    transition: "all 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.filter = `drop-shadow(0 0 30px ${shadowColor}) ${
                      invert ? "invert(1)" : ""
                    }`)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.filter = invert
                      ? "invert(1)"
                      : "none")
                  }
                />
              ))}
            </div>
          </Fade>
        ))}
      </div>
    </Element>
  );
}
