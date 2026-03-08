import Option from "./Option";
import { useState } from "react";

function QuizCard({
  questionIndex,
  question,
  options,
  answer,
  userAns,
  handleClick,
}) {
  const optionsList = [];

  for (let i = 0; i < 4; i++) {
    if (userAns != null) {
      optionsList.push(
        <Option
          key={i}
          className={i == answer ? "correct-option" : "wrong-option"}
          text={options[i]}
          handleClick={handleClick}
          optionIndex={i}
          questionIndex={questionIndex}
        />,
      );
    } else {
      optionsList.push(
        <Option
          key={i}
          className="default-option"
          text={options[i]}
          optionIndex={i}
          handleClick={handleClick}
          questionIndex={questionIndex}
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
