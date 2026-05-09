import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import BackgroundGlow from "../components/BackgroundGlow";

function ProjectDetail() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  if (!project) return <div>Project not found</div>;

  return (
    <main className="relative flex flex-col min-h-screen scroll-smooth text-white overflow-x-hidden">
      <BackgroundGlow />
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* navbar */}
        <div className="flex py-8 items-center text-xl ">
          <div className="px-10 md:px-20 "><Link to="/" className="hover:underline">Home</Link>/<Link to="/projects" className="hover:underline">Projects</Link>/</div>
          <hr className="bg-white w-full" />
        </div>

        <div className=" text-white pb-40 p-5 max-w-[1300px] flex flex-col gap-10 mx-auto text-lg">
          <div className="flex md:gap-2 flex-col md:flex-row">
            <div className="flex-1 p-3 md:p-6">
              <p className="text-base mt-2">{project.tech} - {project.year}</p>
              <h1 className="text-4xl">{project.title}</h1>

              <p className="my-10 md:max-w-xl">{project.description}</p>
            </div>
            <div className="flex-1">
              <img className="rounded-md" src={project.image1} alt={project.title} />
            </div>
          </div>
          <div className="flex  px-3 md:px-0 ">
            <p>{project.text1}</p>
          </div>
          <div className="flex md:gap-2 flex-col md:flex-row">
            <div className="flex-1 ">
              <img className="rounded-md" src={project.image2} alt={project.title} />
            </div>
            <div className="flex-1 ">
              <p className="text-lg px-3 pt-10 md:p-10">{project.text2}</p>
            </div>
          </div>
          <div className="flex md:py-10 px-3 md:px-0">
            <p>{project.text3}</p>
          </div>
        </div>
      </div>
    </main >
  );
}

export default ProjectDetail;