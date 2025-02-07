import "../App.css";
import icon from "../icon.png";

export default function Header() {
  return (
    <>
      <div className="flex items-center justify-around p-3 bg-linae bg-[#0D121B]">
        <img src={icon} className="h-[50px] w-[50px] invert cursor-pointer " />
        <ul className="flex gap-9 bold font-medium font-[Audiowide] text-white foe">
          <li className="cursor-pointer uppercase hover:text-emerald-100 transition-[0.5s]">
            Home
          </li>
          <li className="cursor-pointer uppercase hover:text-emerald-100 transition-[0.5s]">
            About
          </li>
          <li className="cursor-pointer uppercase hover:text-emerald-100 transition-[0.5s]">
            Skills
          </li>
          <li className="cursor-pointer uppercase hover:text-emerald-100 transition-[0.5s]">
            Projects
          </li>
          <li className="cursor-pointer uppercase hover:text-emerald-100 transition-[0.5s]">
            Contact
          </li>
        </ul>
      </div>
    </>
  );
}
