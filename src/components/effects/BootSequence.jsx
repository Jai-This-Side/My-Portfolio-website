import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const bootSteps = [
  {
    text: "[BOOT] Initializing Cloud Operations Center...",
    delay: 400,
  },
  {
    text: "[OK] Linux Kernel Loaded",
    delay: 250,
  },
  {
    text: "[OK] Docker Engine Started",
    delay: 250,
  },
  {
    text: "[OK] Connecting AWS...",
    delay: 350,
  },
  {
    text: "[OK] Loading Terraform State...",
    delay: 300,
  },
  {
    text: "[OK] Authenticating GitHub...",
    delay: 250,
  },
  {
    text: "[OK] Starting Portfolio Services...",
    delay: 300,
  },
  {
    text: "",
    delay: 300,
  },
  {
    text: "Welcome Recruiter 👋",
    delay: 600,
  },
];

export default function BootSequence({ onFinish }) {
  const [lines, setLines] = useState([]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let timeout;

    const showLine = (index) => {
      if (index >= bootSteps.length) {
        setFinished(true);

        timeout = setTimeout(() => {
          onFinish();
        }, 1200);

        return;
      }

      timeout = setTimeout(() => {
        setLines((prev) => [...prev, bootSteps[index].text]);

        showLine(index + 1);
      }, bootSteps[index].delay);
    };

    showLine(0);

    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black text-green-400 z-[9999] flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-[90%] max-w-4xl font-mono">

          <motion.h1
            className="text-blue-400 text-3xl mb-8 font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            JAI.DEV
          </motion.h1>

          {lines.map((line, index) => (
            <motion.div
              key={index}
              className="text-lg mb-2"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {line}
            </motion.div>
          ))}

          {!finished && (
            <motion.span
              animate={{
                opacity: [0, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.5,
              }}
              className="text-xl"
            >
              █
            </motion.span>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}