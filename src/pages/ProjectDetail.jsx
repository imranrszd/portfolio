import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";



function ProjectDetail() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  if (!project) return <div>Project not found</div>;

  return (
    <main className="flex flex-col h-screen scroll-smooth bg-(--primary-color) text-white">
      {/* navbar */}
      <div className="flex py-8 items-center text-xl ">
        <div className="px-20 "><Link to="/" className="hover:underline">Home</Link>/<Link to="/projects" className="hover:underline">Projects</Link>/</div>
        <hr className="bg-white w-full" />
      </div>

      <div className="bg-(--primary-color) text-white pb-40 p-5 max-w-[1300px] flex flex-col gap-10 mx-auto text-lg">
        <div className="flex gap-2 flex-col md:flex-row">
          <div className="flex-1  p-6">
            <p className="text-base mt-2">{project.tech} - {project.year}</p>
            <h1 className="text-4xl">{project.title}</h1>

            <p className=" mt-10 max-w-xl">{project.description}</p>
          </div>
          <div className="flex-1">
            <img className="rounded-md" src={project.image1} alt={project.title} />
          </div>
        </div>
        <div className="flex py-10 ">
          <p>{project.text1}</p>
        </div>
        <div className="flex gap-2 flex-col md:flex-row">
          <div className="flex-1 ">
            <img className="rounded-md" src={project.image2} alt={project.title} />
          </div>
          <div className="flex-1 ">
            <p className="text-lg p-10">{project.text2}</p>
          </div>
        </div>
        <div className="flex py-10 ">
          <p>{project.text3}</p>
        </div>
      </div>
    </main >
  );
}

export default ProjectDetail;