import SingleProject from "./SingleProject";
import { ProjectArray } from "./ProjectsArray";
import { Element } from "react-scroll";
type projectProps = {
  name: string;
  link: string;
  image: string;
};
export default function Projects() {
  const mappingProjects = ProjectArray.filter(
    (p): p is projectProps => p !== undefined
  ).map((p: projectProps) => (
    <SingleProject
      key={p.name + p.link}
      name={p.name}
      link={p.link}
      image={p.image}
    />
  ));
  return (
    <Element name="Projects">
      <div className="my-[2rem]">
        <h1 className="font-[Audiowide] inline-block text-white font-bold text-3xl relative left-[10%] mb-[2rem]">
          PROJECTS
        </h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,auto))] p-5 gap-6">
          {mappingProjects}
        </div>
      </div>
    </Element>
  );
}
