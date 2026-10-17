const STORAGE_KEY = "questions";

export const getQuestions = () => {
  const storedQuestions = localStorage.getItem(STORAGE_KEY);

  if (!storedQuestions) {
    return null;
  }

  return JSON.parse(storedQuestions);
};

export const saveQuestions = (q) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(q));
};

export const removeQuestions = ()=>{
    localStorage.removeItem(STORAGE_KEY);
}