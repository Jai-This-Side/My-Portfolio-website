import { motion } from "framer-motion";

export default function Button({
  children,
  variant = "primary",
  href,
  download = false,
  onClick,
}) {
  const styles = {
    primary:
      "bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/30",
    secondary:
      "border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10",
  };

  const className = `
    inline-flex
    items-center
    justify-center
    rounded-xl
    px-7
    py-3
    font-semibold
    transition-all
    duration-300
    shadow-lg
    ${styles[variant]}
  `;

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={href}
        download={download}
        target={download ? "_self" : "_blank"}
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
  type={onClick ? "button" : "submit"}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  );
}