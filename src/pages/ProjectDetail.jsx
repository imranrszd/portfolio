import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { projects } from "../data/projects";
import { ExternalLink, ArrowLeft } from "lucide-react";
import BackgroundGlow from "../components/BackgroundGlow";

function Section({ title, children }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">{title}</h2>
      <div className="text-white/80 leading-relaxed text-base md:text-lg">
        {children}
      </div>
    </section>
  );
}

function ImageCard({ src, alt }) {
  if (!src) return null;

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-3 md:p-4">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full rounded-2xl object-cover"
      />
    </div>
  );
}

function ProjectDetail() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center">
        <div className="text-center px-5">
          <h1 className="text-3xl font-semibold mb-4">Project not found</h1>
          <Link to="/projects" className="underline text-white/80 hover:text-white">
            Back to projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen scroll-smooth text-white overflow-x-hidden">
      <BackgroundGlow />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Breadcrumb */}
        <div className="flex py-8 items-center text-lg">
          <div className="px-6 md:px-20 flex items-center gap-2 whitespace-nowrap">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link to="/projects" className="hover:underline">
              Projects
            </Link>
            <span>/</span>
          </div>
          <hr className="bg-white/30 w-full border-white/20" />
        </div>

        <div className="max-w-[1300px] mx-auto px-5 pb-32">
          {/* Hero */}
          <section className="grid md:grid-cols-2 gap-10 items-center min-h-[70vh]">
            <div className="p-2 md:p-6">
              <p className="font-mono text-sm md:text-base text-white/70 mb-4">
                {project.tech} - {project.year}
              </p>

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 text-4xl md:text-5xl font-bold leading-tight hover:underline"
                >
                  <span>{project.title}</span>
                  <ExternalLink
                    size={32}
                    className="opacity-70 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0"
                  />
                </a>
              ) : (
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  {project.title}
                </h1>
              )}

              <p className="my-8 md:max-w-xl text-lg md:text-xl text-white/80 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 hover:bg-white/10 transition"
                >
                  <ArrowLeft size={18} />
                  Back to Projects
                </Link>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 hover:bg-white/10 transition"
                  >
                    Visit Project
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <ImageCard src={project.image1} alt={project.title} />
          </section>

          {/* Content */}
          <div className="grid gap-8 mt-10">
            {project.text1 && (
              <Section title="Project Overview">
                <p>{project.text1}</p>
              </Section>
            )}

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <ImageCard src={project.image2} alt={`${project.title} screenshot`} />

              {project.text2 && (
                <Section title="Key Features">
                  <p>{project.text2}</p>
                </Section>
              )}
            </div>

            {project.text3 && (
              <Section title="Technical Implementation">
                <p>{project.text3}</p>
              </Section>
            )}

            {(project.image3 || project.text4) && (
              <div className="grid md:grid-cols-1 gap-8 items-center">
                {project.text4 && (
                  <Section title="Outcome">
                    <p>{project.text4}</p>
                  </Section>
                )}

                <ImageCard
                  src={project.image3}
                  alt={`${project.title} extra screenshot`}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProjectDetail;