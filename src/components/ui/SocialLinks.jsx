import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex gap-6 text-2xl mt-8">

      <a
        href="https://github.com/Jai-This-Side"
        target="_blank"
        rel="noreferrer"
        className="hover:text-cyan-400 transition"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/jai-singh-bisht-b28b29289/"
        target="_blank"
        rel="noreferrer"
        className="hover:text-cyan-400 transition"
      >
        <FaLinkedin />
      </a>

    </div>
  );
}