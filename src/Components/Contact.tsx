import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import Form from "./Form";



export default function Contact() {


  return (
    <div className="text-white flex justify-around flex-wrap gap-7 mt-[3rem] relative">
      <div>
        <div className="flex items-center gap-2 flex-wrap my-7">
          <h2 className="text-3xl font-[Orbitron] font-semibold">
            GET IN TOUCH{" "}
          </h2>{" "}
          <MailOutlineIcon
            style={{
              fontSize: "30px",
            }}
          />
        </div>
        <div className="flex items-center gap-8">
          <div className="flex flex-col justify-center gap-6">
            <h3 className="font-bold font-[Orbitron]">CONTACT</h3>
            <a className="text-[#0566B6]" href="mailto:aymanespd@gmail.com">
              aymanespd@gmail.com
            </a>
          </div>
          <div className="flex flex-col justify-center gap-6">
            <h3 className="font-bold font-[Orbitron]">SOCIAL MEDIA</h3>
            <div className="flex items-center gap-2.5">
              <a className="hover:text-[#61DAFB]" href="#">
                <LinkedInIcon />
              </a>
              <a className="hover:text-[#61DAFB]" href="#">
                <InstagramIcon />
              </a>
              <a className="hover:text-[#61DAFB]" href="#">
                <WhatsAppIcon />
              </a>
              <a className="hover:text-[#61DAFB]" href="#">
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* email form */}
      <Form />
    </div>
  );
}
