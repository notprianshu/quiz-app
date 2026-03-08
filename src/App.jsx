import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import QuizCard from "./components/QuizCard";
import "./app.css";

const questions = [
  {
    que: "Who is the current Prime Minister of India?",
    options: ["Narendra Modi", "Rahul Gandhi", "Amit Shah", "Manmohan Singh"],
    ans: 0,
  },
  {
    que: "What is the capital city of India?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    ans: 1,
  },
  {
    que: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    ans: 1,
  },
  {
    que: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Leo Tolstoy",
      "Mark Twain",
    ],
    ans: 0,
  },
  {
    que: "What is the largest ocean on Earth?",
    options: [
      "Indian Ocean",
      "Atlantic Ocean",
      "Pacific Ocean",
      "Arctic Ocean",
    ],
    ans: 2,
  },
];

function App() {
  const [userAns, setUserAns] = useState(
    new Array(questions.length).fill(null),
  );
  const [currentQue, setCurrentQue] = useState(0);

  useEffect(() => {
    console.log(userAns);
  }, [userAns]);

  function handleClick(questionIndex, optionIndex) {
    if (userAns[questionIndex] == null) {
      setUserAns((prev) => {
        const next = [...prev];
        next[questionIndex] = optionIndex;
        return next;
      });
    } else {
      console.log("The question has already been answered");
    }
  }

  const que = questions[currentQue].que;
  const options = questions[currentQue].options;
  const ans = questions[currentQue].ans;

  function viewChange(num) {
    if (num == -1 && currentQue != 0) {
      setCurrentQue(currentQue - 1);
    }
    if (num == +1 && currentQue != questions.length - 1) {
      setCurrentQue(currentQue + 1);
    }
  }

  return (
    <>
      <div>
        <button onClick={() => viewChange(-1)}>Previous</button>
      </div>
      <QuizCard
        questionIndex={currentQue}
        question={que}
        options={options}
        answer={ans}
        userAns={userAns[currentQue]}
        handleClick={handleClick}
      />
      {/* <QuizCard
        questionIndex={1}
        question={que1}
        options={options1}
        answer={ans1}
        userAns={userAns[1]}
        handleClick={handleClick}
      /> */}
      <div>
        <button onClick={() => viewChange(+1)}>
          {currentQue == questions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </>
  );
}

export default App;
