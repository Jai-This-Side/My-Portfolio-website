import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useHotkeys } from "react-hotkeys-hook";

const COMMANDS = [
  {
    label: "Go to Mission",
    command: "mission",
    action: () =>
      document
        .getElementById("mission")
        ?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    label: "Go to Projects",
    command: "projects",
    action: () =>
      document
        .getElementById("projects")
        ?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    label: "Go to Certificates",
    command: "vault",
    action: () =>
      document
        .getElementById("vault")
        ?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    label: "Go to Contact",
    command: "contact",
    action: () =>
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    label: "GitHub",
    command: "github",
    action: () =>
      window.open("https://github.com/Jai-This-Side"),
  },
  {
    label: "LinkedIn",
    command: "linkedin",
    action: () =>
      window.open(
        "https://www.linkedin.com/in/jai-singh-bisht-b28b29289/"
      ),
  },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const openPalette = () => {
    setQuery("");
    setOpen(true);
  };

  const closePalette = () => {
    setQuery("");
    setOpen(false);
  };

  useHotkeys("ctrl+k", (e) => {
    e.preventDefault();
    openPalette();
  });

  useHotkeys("esc", closePalette);

  const filtered = COMMANDS.filter((item) =>
    item.command.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex justify-center pt-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{
              y: -20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            className="w-[650px] rounded-2xl border border-cyan-500/20 bg-slate-900 shadow-2xl overflow-hidden"
          >
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command..."
              className="w-full border-b border-slate-700 bg-transparent p-5 outline-none text-lg"
            />

            {filtered.map((item) => (
              <button
                key={item.command}
                onClick={() => {
                  item.action();
                  closePalette();
                }}
                className="flex w-full justify-between p-5 hover:bg-slate-800 transition"
              >
                <span>{item.label}</span>

                <span className="text-cyan-400">
                  {item.command}
                </span>
              </button>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}