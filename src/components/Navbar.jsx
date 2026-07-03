import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <h1 className="text-2xl font-black tracking-widest text-cyan-400">
          JAI.DEV
        </h1>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider text-slate-300">

          <a href="#mission" className="hover:text-cyan-400 transition">
            Home
          </a>

          <a href="#identity" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#services" className="hover:text-cyan-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>

          <a href="#vault" className="hover:text-cyan-400 transition">
            Certificates
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>

        </div>

        <div className="flex gap-5 text-xl text-white">

          <a
            href="https://github.com/Jai-This-Side"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/jai-singh-bisht-b28b29289/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>
    </nav>
  );
}