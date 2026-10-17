
import { useContext } from "react";
import { Link } from "react-router";
import { MyStore } from "../context/QuestionContext";

export default function Dashboard() {
  const { questions } = useContext(MyStore);

  const total = questions.length;
  const completed = questions.filter((q) => q.status === "Completed").length;
  const pending = questions.filter((q) => q.status === "Pending").length;
  const inProgress = questions.filter((q) => q.status === "In Progress").length;
  const percentage = total ? Math.round((completed / total) * 100) : 0;

  const stats = [
    { label: "Total Questions", value: total, color: "text-indigo-300" },
    { label: "Completed", value: completed, color: "text-emerald-300" },
    { label: "In Progress", value: inProgress, color: "text-sky-300" },
    { label: "Pending", value: pending, color: "text-amber-300" },
  ];

  return (
    <section>
      <p className="text-sm text-indigo-300">YOUR LEARNING OVERVIEW</p>
      <h2 className="mt-2 text-3xl font-bold text-white">Dashboard</h2>
      <p className="mt-2 text-slate-400">
        Small steps every day lead to better interview results.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-[#151620] p-5"
          >
            <p className="text-sm text-slate-400">{stat.label}</p>
            <p className={`mt-4 text-3xl font-bold ${stat.color}`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-[#151620] p-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-white">Overall progress</h3>
            <p className="mt-1 text-sm text-slate-400">
              Based on completed questions
            </p>
          </div>
          <span className="text-2xl font-bold text-indigo-300">
            {percentage}%
          </span>
        </div>

        <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-indigo-500 transition-all"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <Link
          to="/questions"
          className="mt-6 inline-block rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-400"
        >
          Manage questions
        </Link>
      </div>
    </section>
  );
}
