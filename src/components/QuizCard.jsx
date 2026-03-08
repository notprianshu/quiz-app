import Option from "./Option";
import { useState } from "react";

function QuizCard({ question, options, answer }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);
  console.log(selectedOption);

  function handleClick(option) {
    if (!answered) {
      setSelectedOption(option);
      setAnswered(true);
    }
  }

  const optionsList = [];

  for (let i = 0; i < 4; i++) {
    if (answered) {
      optionsList.push(
        <Option
          key={i}
          className={i == answer ? "correct-option" : "wrong-option"}
          text={options[i]}
          handleClick={handleClick}
          index={i}
        />,
      );
    } else {
      optionsList.push(
        <Option
          key={i}
          text={options[i]}
          index={i}
          handleClick={handleClick}
        />,
      );
    }
  }

  return (
    <>
      <div>{question}</div>
      {optionsList}
    </>
  );
}

export default QuizCard;
