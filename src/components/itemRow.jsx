import React, {useState} from "react";

function Item({count, question}) {
  const [isActive, setIsActive] = useState(false)
  const [isDisplayed, setIsDisplayed] = useState(true);

  function handleActive(){
    setIsActive(true)
  }

  function handleNoneActive(e){
    e.stopPropagation();
    setIsActive(false)
    setIsDisplayed(false)
  }

  return (
      <div className="item-row-question-block" onClick={handleActive}>
        {!isActive ? <span>{isDisplayed ? count: " "}</span> : (      
          <div className="popup-active">
            <div className="question-block">{question}</div>
            <div className="answer-block">
              <div className="team-one"></div>
              <div className="false" onClick={handleNoneActive}></div>
              <div className="team-two"></div>
            </div>
          </div>)
          }
      </div>
  );
}

function ItemRow({data, index}) {
  return (
    <div className="item-row-wrapper">
      <div className="item-row-question-block">{data[index].name}</div>
      {data[index].questions.map((item, i) => 
        <Item 
          key={i} 
          count={item.count} 
          question={item.question}
        />)}
    </div>
  );
}

export { ItemRow };