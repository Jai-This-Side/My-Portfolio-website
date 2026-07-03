import skills from "../data/skills";
import GlassCard from "./ui/GlassCard";
import SectionHeading from "./ui/SectionHeading";

export default function Skills() {
  return (
    <section
      id="services"
      className="bg-slate-950 px-8 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <SectionHeading
          title="services.yaml"
          subtitle="Technical Skills"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {skills.map((skill) => (
            <GlassCard key={skill.category}>

              <h3 className="mb-6 text-2xl font-bold text-cyan-400">
                {skill.category}
              </h3>

              <div className="flex flex-wrap gap-3">

                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-800 px-4 py-2 text-sm"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </GlassCard>
          ))}

        </div>

      </div>
    </section>
  );
}