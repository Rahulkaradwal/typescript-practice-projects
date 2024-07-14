const url: string = 'http://localhost:8000/questions';

export const getQuestions = async () => {
  try {
    const res = await fetch(url);
    const questions = await res.json();
    console.log(questions);
    return questions;
  } catch (err) {
    console.log(err);
  }
};
