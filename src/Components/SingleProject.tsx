import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";

type projectProp = {
  name: string;
  link: string;
  image: string;
};

export default function SingleProject(props: projectProp) {
  return (
    <div className="hover:shadow-[0px_0px_40px_15px_rgba(19,_28,_67,_1)] transition-all duration-300 rounded-[8px] overflow-hidden group">
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <div>
          <img src={props.image} alt="Hotel Picture" className="aspect-2/1" />
          <div className="bg-gradient-to-r from-[#0F1620] to-[#131A2A] p-3 relative">
            <h3 className="text-white font-[Orbitron] text-center py-4 group-hover:text-blue-300 transition-colors">
              {props.name}
            </h3>

            {/* Opzione 1: Solo icona GitHub con tooltip effect */}
            {/* <div className="absolute right-2 bottom-2 flex items-center gap-1">
              <GitHubIcon className="text-white group-hover:text-blue-300 transition-colors text-lg" />
              <LaunchIcon className="text-white group-hover:text-blue-300 transition-colors text-sm" />
            </div> */}

            {/* Overlay con testo "View on GitHub" che appare on hover */}
            <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-2 text-white">
                <GitHubIcon />
                <span className="font-medium">View on GitHub</span>
                <LaunchIcon className="text-sm" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
