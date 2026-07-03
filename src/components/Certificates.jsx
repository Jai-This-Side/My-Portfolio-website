import certificates from "../data/certificates";
import GlassCard from "./ui/GlassCard";
import SectionHeading from "./ui/SectionHeading";

export default function Certificates() {
  return (
    <section
      id="vault"
      className="bg-slate-950 px-8 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <SectionHeading
          title="credential-vault/"
          subtitle="Certificates"
        />

        <div className="grid gap-8 md:grid-cols-2">

          {certificates.map((cert) => (
            <GlassCard key={cert.title}>

              <a
  href={cert.image}
  target="_blank"
  rel="noreferrer"
>
  <img
    src={cert.image}
    alt={cert.title}
    className="rounded-xl mb-6 w-full object-cover transition duration-300 hover:scale-[1.02]"
  />
</a>

              <h3 className="text-2xl font-bold">
                {cert.title}
              </h3>

              <p className="mt-2 text-slate-400">
                {cert.issuer}
              </p>

            </GlassCard>
          ))}

        </div>

      </div>
    </section>
  );
}