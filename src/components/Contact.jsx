import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import GlassCard from "./ui/GlassCard";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#020617] py-28 px-8 text-white"
    >
      <div className="mx-auto max-w-6xl">

        <SectionHeading
          title="secure-channel()"
          subtitle="Contact"
        />

        <GlassCard>

          <h3 className="text-3xl font-bold mb-4">
            Let's Build Something Awesome 🚀
          </h3>

          <p className="text-slate-400 leading-8 mb-10">
            I'm currently looking for internships and entry-level
            Cloud/DevOps opportunities. Feel free to reach out if you'd
            like to collaborate or just have a chat.
          </p>

          <div className="grid gap-6 md:grid-cols-3">

            <a
              href="mailto:jaisinghprsnl99@gmail.com"
              className="rounded-xl bg-slate-800 p-6 hover:bg-slate-700 transition"
            >
              <FaEnvelope className="text-3xl text-cyan-400 mb-4" />

              <h4 className="font-bold">
                Email
              </h4>

              <p className="text-slate-400 text-sm mt-2 break-all">
                jaisinghprsnl99
                @gmail.com
              </p>
            </a>

            <a
              href="https://github.com/Jai-This-Side"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-slate-800 p-6 hover:bg-slate-700 transition"
            >
              <FaGithub className="text-3xl text-cyan-400 mb-4" />

              <h4 className="font-bold">
                GitHub
              </h4>

              <p className="text-slate-400 text-sm mt-2">
                Jai-This-Side
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/jai-singh-bisht-b28b29289/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-slate-800 p-6 hover:bg-slate-700 transition"
            >
              <FaLinkedin className="text-3xl text-cyan-400 mb-4" />

              <h4 className="font-bold">
                LinkedIn
              </h4>

              <p className="text-slate-400 text-sm mt-2">
                Connect with me
              </p>
            </a>

          </div>

          <div className="mt-12">

            <Button
              href="mailto:jaisinghprsnl99@gmail.com"
            >
              Transmit Message
            </Button>

          </div>

        </GlassCard>

      </div>
    </section>
  );
}