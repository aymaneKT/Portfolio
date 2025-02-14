import { Fade } from "react-awesome-reveal";
import "../res.css";
import Model from "./Model";

export default function Me() {
  return (
    <div className=" my-[11rem] reltive  " id="About">
      <Model />
      <h1 className="text-[#fff] font-[Orbitron] inline-block text-[4vw] max-[500px]:text-[32px] relative font-extrabold  left-[10%] max-[500px]:left-[7%] leading-[4rem]">
        Hi, <br />
        <span className="flex gap-2">
          I'am{" "}
          <Fade direction="down" triggerOnce>
            <span className="text-[#5CCEED]">AYMANE KABTI </span>
          </Fade>
        </span>
        FRONT-END DEVELOPER
      </h1>
    </div>
  );
}
