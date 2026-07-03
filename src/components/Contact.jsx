import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import GlassCard from "./ui/GlassCard";
import SectionHeading from "./ui/SectionHeading";
import Button from "./ui/Button";

export default function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_rvv0tpr",
        "template_54mdv6f",
        form.current,
        "Ponyl1vgukM9kTrj7"
      )
      .then(() => {
        setLoading(false);
        setStatus(" Message transmitted successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setStatus(" Failed to send message. Please try again.");
      });
  };

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

          <h3 className="mb-3 text-3xl font-bold">
            Let's Connect
          </h3>

          <p className="mb-10 text-slate-400">
            Interested in collaborating, hiring, or discussing cloud and
            DevOps? Send me a message and I'll get back to you as soon as
            possible.
          </p>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
          >

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full rounded-xl bg-slate-800 p-4 outline-none transition focus:ring-2 focus:ring-cyan-500"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full rounded-xl bg-slate-800 p-4 outline-none transition focus:ring-2 focus:ring-cyan-500"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
              className="w-full rounded-xl bg-slate-800 p-4 outline-none transition focus:ring-2 focus:ring-cyan-500"
            />

            <Button type="submit">
              {loading ? "Transmitting..." : "Transmit Message"}
            </Button>

          </form>

          {status && (
            <p className="mt-6 text-cyan-400">
              {status}
            </p>
          )}

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <a
              href="mailto:jaisinghprsnl99@gmail.com"
              className="rounded-xl bg-slate-800 p-6 transition hover:bg-slate-700"
            >
              <FaEnvelope className="mb-4 text-3xl text-cyan-400" />

              <h4 className="font-bold">
                Email
              </h4>

              <p className="mt-2 text-sm text-slate-400">
                jaisinghprsnl99@gmail.com
              </p>

            </a>

            <a
              href="https://github.com/Jai-This-Side"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-slate-800 p-6 transition hover:bg-slate-700"
            >
              <FaGithub className="mb-4 text-3xl text-cyan-400" />

              <h4 className="font-bold">
                GitHub
              </h4>

              <p className="mt-2 text-sm text-slate-400">
                github.com/Jai-This-Side
              </p>

            </a>

            <a
              href="https://www.linkedin.com/in/jai-singh-bisht-b28b29289/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-slate-800 p-6 transition hover:bg-slate-700"
            >
              <FaLinkedin className="mb-4 text-3xl text-cyan-400" />

              <h4 className="font-bold">
                LinkedIn
              </h4>

              <p className="mt-2 text-sm text-slate-400">
                Connect with me
              </p>

            </a>

          </div>

        </GlassCard>

      </div>
    </section>
  );
}