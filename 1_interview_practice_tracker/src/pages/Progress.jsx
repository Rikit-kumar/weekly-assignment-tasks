
import { useContext } from "react";
import { Link } from "react-router";
import { MyStore } from "../context/QuestionContext.jsx";

export default function Progress() {
  const { questions } = useContext(MyStore);
  const total = questions.length;

  const statuses = [
    { label: "Completed", color: "bg-emerald-400", text: "text-emerald-300" },
    { label: "In Progress", color: "bg-sky-400", text: "text-sky-300" },
    { label: "Pending", color: "bg-amber-400", text: "text-amber-300" },
  ];

  return (
    <section>
      <p className="text-sm text-indigo-300">YOUR CONSISTENCY</p>
      <h2 className="mt-2 text-3xl font-bold text-white">Progress</h2>
      <p className="mt-2 text-slate-400">
        Review your interview preparation at a glance.
      </p>

      <div className="mt-8 rounded-2xl border border-white/10 bg-[#151620] p-6">
        <h3 className="text-lg font-semibold text-white">Question breakdown</h3>
        <p className="mt-2 text-sm text-slate-400">
          {total} questions tracked in total
        </p>

        <div className="mt-6 space-y-6">
          {statuses.map((item) => {
            const count = questions.filter(
              (q) => q.status === item.label
            ).length;
            const percentage = total
              ? Math.round((count / total) * 100)
              : 0;

            return (
              <div key={item.label}>
                <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                  <span className={item.text}>{item.label}</span>
                  <span className="text-slate-300">
                    {count} · {percentage}%
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`h-full rounded-full ${item.color}`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <Link
          to="/questions"
          className="mt-8 inline-block text-sm text-indigo-300 hover:text-indigo-200"
        >
          Continue practicing →
        </Link>
      </div>
    </section>
  );
}
