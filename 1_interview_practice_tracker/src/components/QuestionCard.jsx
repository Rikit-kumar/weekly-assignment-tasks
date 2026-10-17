import { Trash2, ExternalLink } from "lucide-react";

export default function QuestionCard({ question, onStatusChange, onDelete }) {
  const statusColors = {
    Pending: "text-amber-300 bg-amber-400/10",
    "In Progress": "text-sky-300 bg-sky-400/10",
    Completed: "text-emerald-300 bg-emerald-400/10",
  };

  return (
    <article className="rounded-2xl border border-white/10 bg-[#151620] p-5 transition hover:border-indigo-400/40">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="break-words font-semibold text-white">
            {question.title}
          </h3>
          <p className="mt-1 text-sm text-slate-400">
            {question.topic} · {question.platform}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onDelete(question.id)}
          aria-label={`Delete ${question.title}`}
          className="rounded-lg p-2 text-slate-400 hover:bg-red-500/10 hover:text-red-400"
        >
          <Trash2 size={18} />
        </button>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <span
          className={`rounded-lg px-3 py-1 text-xs font-medium ${
            question.difficulty === "Easy"
              ? "bg-emerald-400/10 text-emerald-300"
              : question.difficulty === "Medium"
                ? "bg-amber-400/10 text-amber-300"
                : "bg-red-400/10 text-red-300"
          }`}
        >
          {question.difficulty}
        </span>

        <select
          aria-label={`Status for ${question.title}`}
          value={question.status}
          onChange={(e) => onStatusChange(question.id, e.target.value)}
          className={`max-w-full rounded-lg border-0 px-3 py-2 text-xs outline-none ${
            statusColors[question.status] || statusColors.Pending
          }`}
        >
          <option className="bg-[#151620]">Pending</option>
          <option className="bg-[#151620]">In Progress</option>
          <option className="bg-[#151620]">Completed</option>
        </select>
      </div>

      {question.link && (
        <a
          href={question.link}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm text-indigo-300 hover:text-indigo-200"
        >
          Open question <ExternalLink size={15} />
        </a>
      )}
    </article>
  );
}
