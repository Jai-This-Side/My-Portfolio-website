import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <h1 className="text-2xl font-black tracking-widest text-cyan-400">
          JAI.DEV
        </h1>

        <div className="hidden gap-8 text-sm uppercase tracking-wider text-slate-300 md:flex">

          <a href="#mission">Mission</a>

          <a href="#services">Services</a>

          <a href="#projects">Infrastructure</a>

          <a href="#vault">Vault</a>

          <a href="#contact">Channel</a>

        </div>

        <div className="flex gap-5 text-xl text-white">

          <a
            href="https://github.com/Jai-This-Side"
            target="_blank"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/jai-singh-bisht-b28b29289/"
            target="_blank"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

    </nav>
  );
}