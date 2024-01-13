import React, {useState} from "react";

function Item({count, question, handleScoreFT, handleScoreST, answer, nameFT, nameST, getQuestionCount}) {

  const [isActive, setIsActive] = useState(false) // false = попап с вопросом скрыт
  const [isDisplayed, setIsDisplayed] = useState(true); // true = отображает цифры на блоках с вопросами (100, 200, 300 и т.д)
  const [visibleAnswer, setVisibleAnswer] = useState(true) // toggle показывает и скрывает верный ответ
  const [clicked, setClicked] = useState(false); // блокирует элемент если на вопрос ответили верно или не верно. Предотвращает повторное откытие окна с вопросом. 

  function handleActive(){ // открывает попап с вопросом
    setIsActive(true)
  }

  function handleNoneActive(e){ // при верном ответе функция закрывает попап, добавляет очки, блокирует окно с вопросом и добавляет + 1 в фун-ю подсчитывающую отвеченные вопросы(getQuestionCount)
    if (!clicked) {
      e.stopPropagation();
      setIsActive(false)
      setIsDisplayed(false)
      getQuestionCount(1)
      setClicked(true);
    }
  }

  const handleAnswerHidden = () => {
    setVisibleAnswer(!visibleAnswer)
  }

  function handleClosePopupQuestionBlock(e){ // отвечает за крестик в правом верхнем углу )
    e.stopPropagation();
    setIsDisplayed(true)
    setIsActive(false)
  }

  const BloсkingElementStyle = { // блокирует элемент после ответа, чтоб повторно не открывался.
    pointerEvents: clicked ? 'none' : 'auto',
  };

  return (
      <div className="item-row-question-block block-hover" style={BloсkingElementStyle} data-testid="item-row-question-block" onClick={handleActive}>
        {!isActive ? <div className="count-info">{isDisplayed ? count: " "}</div> : (      
          <div className="popup-active">
            <div className="question-block">
            <div className="close-question-block" onClick={handleClosePopupQuestionBlock}>X</div>
              {question}
              <button className="answer-btn" onClick={handleAnswerHidden}> Ответ </button>
              <div className={visibleAnswer ? " hidden": " "} > {answer} </div>
            </div>
            <div className="answer-block" onClick={handleNoneActive}>
              <div className="team-one" data-testid="team-one" onClick={() => handleScoreFT(count)}>{nameFT ? nameFT : "Нет названия команды ?"}</div>
              <div className="false">Не знаю</div>
              <div className="team-two" data-testid="team-two" onClick={() => handleScoreST(count)}>{nameST ? nameST : "Нет названия команды ?"}</div>
            </div>
          </div>)
          }
      </div>
  );
}

function ItemRow({data, index, handleScoreFT, handleScoreST, nameFT, nameST, getQuestionCount}) {
  const info = data[index];
  const nameForSing = info.name
  return (
    <div className="item-row-wrapper" data-testid="item-row-wrapper">
      <div className="item-row-question-block">{info.name}</div>
      {info?.questions?.map((item, i) => 
        <Item 
          key={i} 
          count={item.count} 
          question={item.question}
          handleScoreFT={handleScoreFT}
          handleScoreST={handleScoreST}
          answer={item.answer}
          nameFT={nameFT}
          nameST={nameST}
          name={nameForSing}
          getQuestionCount={getQuestionCount}
        />)}
    </div>
  );
}

export default ItemRow;