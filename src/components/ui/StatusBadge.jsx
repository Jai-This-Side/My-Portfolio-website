export default function StatusBadge({
  title,
  status,
}) {
  return (
    <div className="flex items-center justify-between border-b border-slate-700 py-3">

      <span className="text-slate-300">
        {title}
      </span>

      <span className="text-green-400 font-semibold">
        ● {status}
      </span>

    </div>
  );
}