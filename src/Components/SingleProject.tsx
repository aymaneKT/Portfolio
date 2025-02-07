import LaunchIcon from "@mui/icons-material/Launch";
type projectProp = {
  name: string;
  link: string;
  image: string;
};
export default function SingleProject(props: projectProp) {
  return (
    <div className="hover:shadow-[0px_0px_40px_15px_rgba(19,_28,_67,_1)] transition ] rounded-[8px] overflow-hidden">
      <a href={props.link} target="_blank">
        <div>
          <img src={props.image} alt="Hotel Picture" />
          <div className="bg-gradient-to-r from-[#0F1620] to-[#131A2A] p-3 relative">
            <h3 className="text-white font-[Orbitron] text-center py-4">
              {props.name}
            </h3>
            <LaunchIcon className="cursor-pointer absolute right-1 bottom-1 text-white" />
          </div>
        </div>
      </a>
    </div>
  );
}
