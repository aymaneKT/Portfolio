import SingleProject from "./SingleProject";
import { ProjectArray } from "./ProjectsArray";
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
    <div className="my-[2rem]" id="Projects">
      <h1 className="font-[Audiowide] inline-block text-white font-bold text-3xl relative left-[10%] mb-[2rem]">
        PROJECTS
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,auto))] gap-6 p-11">
        {mappingProjects}
      </div>
    </div>
  );
}
