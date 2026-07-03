import { motion } from "framer-motion";

import heroImage from "../assets/hero.png";

import AnimatedBackground from "./effects/AnimatedBackground";

import Button from "./ui/Button";
import GlassCard from "./ui/GlassCard";
import StatusBadge from "./ui/StatusBadge";
import TerminalText from "./ui/TerminalText";
import SocialLinks from "./ui/SocialLinks";

export default function Hero() {
  return (
    <section
      id="mission"
      className="relative min-h-screen overflow-hidden bg-[#020617] text-white"
    >
      <AnimatedBackground />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-8">

        <div className="grid w-full gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[0.45em] text-cyan-400 text-sm">

              Cloud Operations Center

            </p>

            <h1 className="mt-6 text-6xl font-black leading-tight">

              Jai

              <span className="block text-cyan-400">
                Singh Bisht
              </span>

            </h1>

            <TerminalText />

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">

              Building cloud infrastructure,
              deploying production-ready
              applications,
              and automating workflows using
              AWS, Docker, Linux and Terraform.

            </p>

            <div className="mt-10 flex gap-5">

              <Button
  onClick={() =>
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" })
  }
>
  View Projects
</Button>

              <Button
  href="/JaiSinghBisht_resume.pdf"
>
  Download Resume
</Button>

            </div>

            <SocialLinks />

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <GlassCard>

              <div className="flex justify-center">

                <motion.img
                  whileHover={{
                    scale: 1.03,
                    rotate: 1,
                  }}
                  src={heroImage}
                  alt="Jai Singh Bisht"
                  className="h-80 w-80 rounded-3xl object-cover border border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
                />

              </div>

              <div className="mt-10">

                <h3 className="mb-5 text-xl font-bold text-cyan-400">

                  SYSTEM STATUS

                </h3>

                <StatusBadge
                  title="AWS"
                  status="ONLINE"
                />

                <StatusBadge
                  title="Docker"
                  status="ACTIVE"
                />

                <StatusBadge
                  title="Terraform"
                  status="READY"
                />

                <StatusBadge
                  title="GitHub"
                  status="CONNECTED"
                />

                <StatusBadge
                  title="Mission"
                  status="Kubernetes"
                />

              </div>

            </GlassCard>

          </motion.div>

        </div>

      </div>

    </section>
  );
}