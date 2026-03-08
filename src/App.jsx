import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import QuizCard from "./components/QuizCard";
import "./app.css";

function App() {
  const [selectedOptions, setSelectedOptions] = useState(
    new Array(5).fill(null),
  );
  const answerKey = [2, 1, 2, 3, 4];
  const que = "Who is the prime minister of India?";
  const options = [
    "Prianshu Bhatia",
    "Prianshu Bhatia",
    "Narendra Modi",
    "Rahul Gandhi",
  ];

  return (
    <>
      <QuizCard question={que} options={options} answer={answerKey[0]} />
    </>
  );
}

export default App;
