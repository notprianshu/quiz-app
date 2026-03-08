function Option({ text, className, handleClick, optionIndex, questionIndex }) {
  return (
    <>
      <button
        className={className}
        onClick={() => handleClick(questionIndex, optionIndex)}
      >
        {text}
      </button>
    </>
  );
}

export default Option;
