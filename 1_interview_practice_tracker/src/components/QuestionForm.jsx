import { useState } from "react";

const initialForm = {
  title: "",
  topic: "",
  difficulty: "Easy",
  status: "Pending",
  platform: "LeetCode",
  link: "",
};

export default function QuestionForm({ onAdd }) {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim() || !form.topic.trim()) return;

    onAdd({
      ...form,
      title: form.title.trim(),
      topic: form.topic.trim(),
      link: form.link.trim(),
    });

    setForm(initialForm);
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-[#171923] px-3 py-3 text-sm text-white outline-none focus:border-indigo-400";

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 grid gap-4 rounded-2xl border border-white/10 bg-[#151620] p-5 md:grid-cols-2"
    >
      <div>
        <label className="mb-2 block text-sm text-slate-300">
          Question title *
        </label>
        <input
          className={inputClass}
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="e.g. Two Sum"
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-slate-300">Topic *</label>
        <input
          className={inputClass}
          name="topic"
          value={form.topic}
          onChange={handleChange}
          placeholder="e.g. Array"
          required
        />
      </div>

      <div>
        <label className="mb-2 block text-sm text-slate-300">Difficulty</label>
        <select
          className={inputClass}
          name="difficulty"
          value={form.difficulty}
          onChange={handleChange}
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm text-slate-300">Platform</label>
        <select
          className={inputClass}
          name="platform"
          value={form.platform}
          onChange={handleChange}
        >
          <option>LeetCode</option>
          <option>GeeksforGeeks</option>
          <option>HackerRank</option>
          <option>Practice</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm text-slate-300">
          Question link (optional)
        </label>
        <input
          className={inputClass}
          type="url"
          name="link"
          value={form.link}
          onChange={handleChange}
          placeholder="https://..."
        />
      </div>

      <div className="flex items-end">
        <button
          type="submit"
          className="w-full rounded-xl bg-indigo-500 px-4 py-3 font-semibold text-white transition hover:bg-indigo-400"
        >
          + Add Question
        </button>
      </div>
    </form>
  );
}
