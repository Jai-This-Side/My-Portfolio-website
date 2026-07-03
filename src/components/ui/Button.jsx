import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  onClick,
}) {
  const styles = {
    primary:
      "bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/30",

    secondary:
      "border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10",
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={onClick}
      className={`
        rounded-xl
        px-7
        py-3
        font-semibold
        transition-all
        duration-300
        shadow-lg
        ${styles[variant]}
      `}
    >
      {children}
    </motion.button>
  );
}