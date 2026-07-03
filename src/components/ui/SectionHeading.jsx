import { motion } from "framer-motion";

export default function SectionHeading({
  title,
  subtitle,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="mb-12"
    >
      <p className="uppercase tracking-[0.4em] text-cyan-400 text-sm">

        {subtitle}

      </p>

      <h2 className="mt-3 text-5xl font-black text-white">

        {title}

      </h2>
    </motion.div>
  );
}