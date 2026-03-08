function Option({ text, className = null, handleClick, index }) {
  return (
    <>
      <button className={className} onClick={() => handleClick(index)}>
        {text}
      </button>
    </>
  );
}

export default Option;
