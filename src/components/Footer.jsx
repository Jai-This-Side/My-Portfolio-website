export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10">

      <div className="mx-auto max-w-7xl px-8 flex flex-col md:flex-row justify-between items-center gap-4">

        <h2 className="text-cyan-400 font-black tracking-widest">
          JAI.DEV
        </h2>

        <p className="text-slate-500 text-sm text-center">
          © {new Date().getFullYear()} Jai Singh Bisht.
          Built with React, Vite & Tailwind CSS.
        </p>

      </div>

    </footer>
  );
}