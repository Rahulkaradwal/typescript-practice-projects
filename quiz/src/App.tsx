import { useEffect } from 'react';
import { getQuestions } from './API';

type question = {
  options: string[];
  points: number;
  question: string;
  correctOption: number;
};

const App = () => {
  console.log(getQuestions());

  const startQuiz = async () => {
    console.log('start quiz');
  };

  const nextQuestin = () => {};

  return (
    <div className="App">
      <h1>Quiz</h1>
      <button onClick={startQuiz}>Start Quiz</button>
    </div>
  );
};

export default App;
