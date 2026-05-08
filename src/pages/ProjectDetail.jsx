import { useParams, Link } from "react-router-dom";

const projects = [
  {
    id: "parcel-management",
    title: "Parcel Management System",
    tech: "JavaScript, Node.js, Tailwind, PostgreSQL",
    year: 2026,
    image: "/images/parcel.png",
    description: "A system to manage parcels efficiently..."
  },
  {
    id: "qylexgames",
    title: "QylexGames",
    tech: "JavaScript, React, Tailwind, PostgreSQL",
    year: 2026,
    image: "/images/qylex.png",
    description: "Gaming platform..."
  },
];

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

      <div className="bg-(--primary-color) text-white pb-40 p-5 max-w-[1400px] flex flex-col gap-10 mx-auto">
        <div className="flex gap-2 flex-col md:flex-row">
          <div className="flex-1  p-6">
            <p className="mt-2">{project.tech} - {project.year}</p>
            <h1 className="text-4xl">{project.title}</h1>

            <p className="text-lg mt-10">Lorem ipsum odor amet, consectetuer Task List elit Medal. Senectus venenatis hendrerit Flutter taciti ex fames. Tellus mus volutpat mollis parturient maximus;</p>
          </div>
          <div className="flex-1">
            <img className="rounded-md" src="https://placehold.co/600x400/white/black?text= " />
          </div>
        </div>
        <div className="flex p-10 ">
          <p>Penatibus aliquet sed massa etiam eros penatibus. Reward rhoncus nisi montes interdum tortor himenaeos integer parturient ante. Mollis sodales eleifend adipiscing ridiculus fames. Ornare pulvinar porttitor ut morbi habitasse primis dis. </p>
        </div>
        <div className="flex gap-2 flex-col md:flex-row">
          <div className="flex-1 ">
            <img className="rounded-md" src="https://placehold.co/600x400/white/black?text= " />
          </div>
          <div className="flex-1 ">
            <p className="text-lg p-10">Lorem ipsum odor amet, consectetuer Task List elit Medal. Senectus venenatis hendrerit Flutter taciti ex fames. Tellus mus volutpat mollis parturient maximus;</p>
          </div>
        </div>
        <div className="flex p-10 ">
          <p>Penatibus aliquet sed massa etiam eros penatibus. Reward rhoncus nisi montes interdum tortor himenaeos integer parturient ante. Mollis sodales eleifend adipiscing ridiculus fames. Ornare pulvinar porttitor ut morbi habitasse primis dis. </p>
        </div>
      </div>
    </main >
  );
}

export default ProjectDetail;