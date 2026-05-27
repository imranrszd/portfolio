import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { ExternalLink, ArrowLeft } from "lucide-react";
import BackgroundGlow from "../components/BackgroundGlow";
import { caseStudies } from "../data/caseStudies";

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

function BulletList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <span className="mt-2 h-2 w-2 rounded-full bg-white/70 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CaseStudyDetail() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const caseStudy = caseStudies.find((item) => item.id === id);

  if (!caseStudy) {
    return (
      <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-4">Case study not found</h1>
          <Link to="/projects" className="underline">
            Back to projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen text-white overflow-x-hidden">
      <BackgroundGlow />

      <div className="relative z-10">
        {/* Breadcrumb */}
        <div className="flex py-8 items-center text-lg">
          <div className="px-6 md:px-20 flex items-center gap-2">
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
            <div>
              <p className="font-mono text-sm md:text-base text-white/70 mb-4">
                {caseStudy.tech} - {caseStudy.year}
              </p>

              <h1 className="font-mono text-4xl md:text-6xl font-bold leading-tight mb-6">
                {caseStudy.title}
              </h1>

              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
                {caseStudy.description}
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 hover:bg-white/10 transition"
                >
                  <ArrowLeft size={18} />
                  Back to Projects
                </Link>

                {caseStudy.links?.github && (
                  <a
                    href={caseStudy.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 hover:bg-white/10 transition"
                  >
                    GitHub
                    <ExternalLink size={18} />
                  </a>
                )}

                {caseStudy.links?.dashboard && (
                  <a
                    href={caseStudy.links.dashboard}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 hover:bg-white/10 transition"
                  >
                    Dashboard
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <div>
              <img
                src={caseStudy.image1}
                alt={caseStudy.title}
                loading="eager"
                className="w-full rounded-2xl border border-white/10 shadow-2xl"
              />
            </div>
          </section>

          {/* Case Study Content */}
          <div className="grid gap-8 mt-10">
            <Section title="Project Overview">
              <p>{caseStudy.subtitle}</p>
            </Section>

            <Section title="Business Problem">
              <p>{caseStudy.problem}</p>
            </Section>

            <Section title="Dataset">
              <p>{caseStudy.dataset}</p>
            </Section>

            {caseStudy.pipelineImage && (
              <section className="rounded-3xl   p-4 md:p-6">
                <div className="mb-4">
                  <h2 className="text-2xl md:text-3xl font-semibold">
                    Project Pipeline
                  </h2>
                  <p className="text-white/70 mt-2">
                    Workflow used to collect, clean, label, and prepare the review dataset for sentiment analysis.
                  </p>
                </div>

                <img
                  src={caseStudy.pipelineImage}
                  alt={`${caseStudy.title} pipeline`}
                  loading="lazy"
                  className="max-w-[800px] rounded-2xl border border-white/10"
                />
              </section>
            )}

            <Section title="Data Cleaning & Preparation">
              <BulletList items={caseStudy.cleaning} />
            </Section>

            <Section title="Analysis Questions">
              <BulletList items={caseStudy.questions} />
            </Section>

            {caseStudy.image2 && (
              <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 md:p-6">
                <img
                  src={caseStudy.image2}
                  alt={`${caseStudy.title} dashboard`}
                  loading="lazy"
                  className="w-full rounded-2xl"
                />
              </section>
            )}

            <Section title="Key Insights">
              <BulletList items={caseStudy.insights} />
            </Section>

            <Section title="Recommendations">
              <BulletList items={caseStudy.recommendations} />
            </Section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CaseStudyDetail;