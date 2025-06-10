const Questions = ({ perguntas, onClick, isOpen }) => {
  return (
    <>
      <div className="card-ask">
        <div className="asked" onClick={onClick}>
          <h3>{perguntas.question}</h3>
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
