import "../App.css";
import icon from "../icon.png";

export default function Header() {
  return (
    <>
      <div className="flex items-center justify-around p-3 bg-linae bg-[#0D121B] fixed top-0 left-0 w-[100%] z-40">
        <img src={icon} className="h-[50px] w-[50px] invert cursor-pointer " />
        <ul className="flex gap-9 bold font-medium font-[Audiowide] text-white foe">
          <a href="#About">
            <li className="cursor-pointer uppercase hover:text-emerald-100 transition-[0.5s]">
              About
            </li>
          </a>
          <a href="#Skills">
            <li className="cursor-pointer uppercase hover:text-emerald-100 transition-[0.5s]">
              Skills
            </li>
          </a>
          <a href="#Projects">
            <li className="cursor-pointer uppercase hover:text-emerald-100 transition-[0.5s]">
              Projects
            </li>
          </a>
          <a href="#Contact">
            <li className="cursor-pointer uppercase hover:text-emerald-100 transition-[0.5s]">
              Contact
            </li>
          </a>
        </ul>
      </div>
    </>
  );
}
