import GlassCard from "./ui/GlassCard";
import SectionHeading from "./ui/SectionHeading";

export default function About() {
  return (
    <section
      id="identity"
      className="bg-[#020617] px-8 py-28 text-white"
    >
      <div className="mx-auto max-w-6xl">

        <SectionHeading
          title="identity.json"
          subtitle="About"
        />

        <GlassCard>
          <pre className="overflow-x-auto text-green-400 leading-8">

{`{
  "name": "Jai Singh Bisht",
  "role": "Cloud & DevOps Engineer",
  "education": "Bachelor of Computer Applications",
  "focus": [
    "AWS",
    "Terraform",
    "Docker",
    "Linux",
    "GitHub Actions"
  ],
  "goal": "Become a Cloud Engineer"
}`}

          </pre>
        </GlassCard>

      </div>
    </section>
  );
}