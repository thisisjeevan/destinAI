import { useState } from "react";
import { useRouter } from "next/router";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const router = useRouter();

  const questions = [
    { question: "What are your interests?", options: ["Technology", "Art", "Business", "Science"] },
    { question: "What are your favorite subjects?", options: ["Math", "History", "Biology", "Literature"] },
    { question: "What are your skills?", options: ["Programming", "Design", "Communication", "Analysis"] },
  ];

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      router.push({ pathname: "/results", query: { answers: JSON.stringify(answers) } });
    }
  };

  return (
    <div className="container">
      <h2>{questions[currentQuestion].question}</h2>
      {questions[currentQuestion].options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(option)}>{option}</button>
      ))}
    </div>
  );
}
