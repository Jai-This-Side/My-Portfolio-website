import projects from "../data/projects";
import GlassCard from "./ui/GlassCard";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#020617] py-28 px-8 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <SectionHeading
          title="infrastructure.tf"
          subtitle="Projects"
        />

        <div className="space-y-10">

          {projects.map((project) => (
            <GlassCard key={project.title}>

              <p className="text-cyan-400 font-mono mb-3">
                {project.file}
              </p>

              <h3 className="text-3xl font-bold mb-5">
                {project.title}
              </h3>

              <p className="text-slate-400 leading-8">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-800 px-4 py-2 text-sm"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              <div className="mt-8">

                <Button>
                  View Project
                </Button>

              </div>

            </GlassCard>
          ))}

        </div>

      </div>
    </section>
  );
}