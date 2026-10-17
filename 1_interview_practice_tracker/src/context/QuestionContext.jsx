
import React, { createContext, useEffect, useState } from "react";
import initialQuestions from "../data/questions";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState(() => {
    try {
      const savedQuestions = localStorage.getItem("interview-questions");

      return savedQuestions
        ? JSON.parse(savedQuestions)
        : initialQuestions;
    } catch {
      return initialQuestions;
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "interview-questions",
      JSON.stringify(questions)
    );
  }, [questions]);

  const addQuestion = (ques) => {
    const newQuestion = {
      ...ques,
      id: Date.now(),
      status: ques.status || "Pending",
    };

    setQuestions((prev) => [...prev, newQuestion]);
  };

  const updateQuestionStatus = (id, status) => {
    setQuestions((prev) =>
      prev.map((ques) =>
        ques.id === id ? { ...ques, status } : ques
      )
    );
  };

  const deleteQuestion = (id) => {
    setQuestions((prev) =>
      prev.filter((ques) => ques.id !== id)
    );
  };

  return (
    <MyStore.Provider
      value={{
        questions,
        setQuestions,
        addQuestion,
        updateQuestionStatus,
        deleteQuestion,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
