import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <>
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(#3b82f6 1px, transparent 1px),
            linear-gradient(90deg,#3b82f6 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500 blur-[180px] opacity-20" />

      {/* Animated scan line */}
      <motion.div
        className="absolute left-0 h-[2px] w-full bg-cyan-400 opacity-30"
        animate={{
          y: ["0%", "100vh"],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear",
        }}
      />
    </>
  );
}