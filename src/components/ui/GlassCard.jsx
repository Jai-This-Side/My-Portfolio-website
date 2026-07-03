import { motion } from "framer-motion";

export default function GlassCard({ children }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      className="
      rounded-3xl
      border
      border-cyan-500/20
      bg-slate-900/50
      backdrop-blur-xl
      shadow-2xl
      shadow-cyan-500/10
      p-8
      "
    >
      {children}
    </motion.div>
  );
}