export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 md:flex-row">

        <h2 className="text-2xl font-black tracking-widest text-cyan-400">
          JAI.DEV
        </h2>

        <p className="text-center text-sm text-slate-500">
          © {new Date().getFullYear()}
        </p>

      </div>
    </footer>
  );
}