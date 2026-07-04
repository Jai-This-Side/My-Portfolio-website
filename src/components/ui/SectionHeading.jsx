import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <h2
        className="
          font-mono
          font-bolda
          text-cyan-400
          text-3xl
          sm:text-4xl
          md:text-5xl
          tracking-tight
          whitespace-nowrap
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-3
          text-base
          sm:text-lg
          md:text-xl
          uppercase
          tracking-[0.3em]
          text-slate-400
        "
      >
        {subtitle}
      </p>

      <div className="mt-6 h-px w-32 bg-cyan-500/40"></div>
    </motion.div>
  );
}