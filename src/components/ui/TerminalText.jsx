import { Typewriter } from "react-simple-typewriter";

export default function TerminalText() {
  return (
    <div className="mt-8 text-2xl font-mono text-cyan-400">

      <span className="mr-3">
        &gt;
      </span>

      <Typewriter
        words={[
          "Cloud Engineer",
          "DevOps Engineer",
          "AWS Enthusiast",
          "Infrastructure Automation",
        ]}
        loop
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={40}
        delaySpeed={1800}
      />

    </div>
  );
}