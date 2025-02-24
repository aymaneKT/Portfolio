import "../App.css";
import "../res.css";
import icon from "../Images/icon.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import { DeviceContext } from "../context/DeviceContext";
import { Link } from "react-scroll";

export default function Header() {
  const menuItems = [
    { name: "About", href: "#About" },
    { name: "Skills", href: "#Skills" },
    { name: "Projects", href: "#Projects" },
    { name: "Contact", href: "#Contact" },
  ];
  const context = useContext(DeviceContext);

  if (!context) {
    throw new Error("context not found ");
  }

  const { setisDroppedTheMenu, isDroppedTheMenu } = context;

  return (
    <>
      <div className="flex items-center max-[600px]:items-end justify-around p-3 bg-linae bg-[#0D121B] fixed top-0 left-0 right-0 w-[100%] z-40">
        <img src={icon} className="h-[50px] w-[50px] invert cursor-pointer " />
        <ul
          className="flex gap-9 bold font-medium font-[Audiowide] text-white max-[600px]:absolute max-[600px]:flex-col max-[600px]:backdrop-blur-[4px] max-[600px]:w-[100%] max-[600px]:items-center max-[600px]:bg-[rgba(0,0,0,0.2)] max-[600px]:p-4 transition-all duration-500 header_list"
          style={{
            transform: isDroppedTheMenu
              ? "translateY(100%)"
              : "translateY(-100%)",
          }}
        >
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="cursor-pointer uppercase hover:text-emerald-100 transition-[0.5s]"
            >
              <Link to={item.name} smooth={true} offset={-75} duration={500}>
                <a
                  href={item.href}
                  onClick={() => {
                    setisDroppedTheMenu(false);
                  }}
                >
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        {isDroppedTheMenu ? (
          <IoClose
            className="text-white text-3xl cursor-pointer hidden max-[600px]:block font-extrabold "
            onClick={() => {
              setisDroppedTheMenu(!isDroppedTheMenu);
            }}
          />
        ) : (
          <RxHamburgerMenu
            className="text-white text-3xl cursor-pointer hidden max-[600px]:block font-extrabold "
            onClick={() => {
              setisDroppedTheMenu(!isDroppedTheMenu);
            }}
          />
        )}
      </div>
    </>
  );
}
