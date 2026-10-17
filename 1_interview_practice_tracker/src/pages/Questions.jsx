import { useContext, useMemo, useState } from "react";
import { MyStore } from "../context/QuestionContext";
import QuestionForm from "../components/QuestionForm";
import QuestionCard from "../components/QuestionCard";

export default function Questions() {
  const { questions, addQuestion, updateQuestionStatus, deleteQuestion } =
    useContext(MyStore);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [difficultyFilter, setDifficultyFilter] = useState("All");

  const filteredQuestions = useMemo(() => {
    return questions.filter((question) => {
      const text =
        `${question.title} ${question.topic} ${question.platform}`.toLowerCase();

      return (
        text.includes(search.toLowerCase()) &&
        (statusFilter === "All" || question.status === statusFilter) &&
        (difficultyFilter === "All" || question.difficulty === difficultyFilter)
      );
    });
  }, [questions, search, statusFilter, difficultyFilter]);

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-[#151620] px-4 py-3 text-sm text-white outline-none focus:border-indigo-400";

  return (
    <section>
      <div className="mb-6">
        <p className="text-sm text-indigo-300">YOUR PRACTICE LIBRARY</p>
        <h2 className="mt-2 text-3xl font-bold text-white">Questions</h2>
        <p className="mt-2 text-slate-400">
          Add, organize and track your interview questions.
        </p>
      </div>

      <QuestionForm onAdd={addQuestion} />

      <div className="mb-5 grid gap-3 sm:grid-cols-3">
        <input
          className={inputClass}
          placeholder="Search questions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className={inputClass}
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option>All</option>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <select
          className={inputClass}
          value={difficultyFilter}
          onChange={(e) => setDifficultyFilter(e.target.value)}
        >
          <option>All</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>

      <p className="mb-4 text-sm text-slate-400">
        Showing {filteredQuestions.length} of {questions.length} questions
      </p>

      {filteredQuestions.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/15 p-10 text-center">
          <h3 className="font-semibold text-white">No questions found</h3>
          <p className="mt-2 text-sm text-slate-400">
            Add a question or change your search filters.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 lg:grid-cols-2">
          {filteredQuestions.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
              onStatusChange={updateQuestionStatus}
              onDelete={deleteQuestion}
            />
          ))}
        </div>
      )}
    </section>
  );
}
