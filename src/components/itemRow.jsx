import React, {useState} from "react";

function Item({count, question, handleScoreFT, handleScoreST, answer, nameFT, nameST}) {

  const [isActive, setIsActive] = useState(false)
  const [isDisplayed, setIsDisplayed] = useState(true);
  const [visibleAnswer, setVisibleAnswer] = useState(true)

  function handleActive(){
    setIsActive(true)
  }

  function handleNoneActive(e){
    e.stopPropagation();
    setIsActive(false)
    setIsDisplayed(false)
  }

  const handleAnswerHidden = () => {
    setVisibleAnswer(!visibleAnswer)
  }

  return (
      <div className="item-row-question-block block-hover" onClick={handleActive}>
        {!isActive ? <div className="count-info">{isDisplayed ? count: " "}</div> : (      
          <div className="popup-active">
            <div className="question-block">
              <div> {question} </div>
              <button className="answer-btn" onClick={handleAnswerHidden}> Ответ </button>
              <div className={visibleAnswer ? " hidden": " "} > {answer} </div>
            </div>
            <div className="answer-block" onClick={handleNoneActive}>
              <div className="team-one" onClick={() => handleScoreFT(count)}>{nameFT}</div>
              <div className="false">Нет ответа</div>
              <div className="team-two" onClick={() => handleScoreST(count)}>{nameST}</div>
            </div>
          </div>)
          }
      </div>
  );
}

function ItemRow({data, index, handleScoreFT, handleScoreST, nameFT, nameST}) {
  const info = data[index]

  return (
    <div className="item-row-wrapper">
      <div className="item-row-question-block">{info.name}</div>
      {info.questions.map((item, i) => 
        <Item 
          key={i} 
          count={item.count} 
          question={item.question}
          handleScoreFT={handleScoreFT}
          handleScoreST={handleScoreST}
          answer={item.answer}
          nameFT={nameFT}
          nameST={nameST}
        />)}
    </div>
  );
}

export { ItemRow };