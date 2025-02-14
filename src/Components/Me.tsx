import { Fade } from "react-awesome-reveal";
import "../res.css";
import Model from "./Model";

export default function Me() {
  return (
    <div className=" my-[11rem] reltive  " id="About">
      <Model />
      <div className="text-[#fff] font-[Orbitron]  text-[4vw] w-fit  relative font-extrabold  left-[10%]  max-[500px]:text-[30px] max-[500px]:left-[0%] pl-7">
        <h1 className="inline-block w-fit">Hi ,</h1>
        <span className="flex gap-2 w-fit">
          I'am{" "}
          <Fade direction="down" triggerOnce>
            <span className="text-[#5CCEED]">AYMANE KABTI </span>
          </Fade>
        </span>
        <h1 className="inline-block w-fit">FRONT-END DEVELOPER</h1>
      </div>
    </div>
  );
}
