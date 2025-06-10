const Questions = ({ perguntas, onClick, isOpen }) => {
  return (
    <>
      <div className="card-ask">
        <div className="asked" onClick={onClick}>
          <h4>{perguntas.question}</h4>
          <span>{isOpen ? "-" : "+"}</span>
        </div>

        <p className={`${isOpen ? "viewOpen" : "viewHidden"}`}>
          {perguntas.ask}
        </p>
      </div>
    </>
  );
};

export default Questions;
