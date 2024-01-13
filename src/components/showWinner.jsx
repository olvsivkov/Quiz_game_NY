import React from "react"

function ShowWinner({scoreFT, scoreST, nameFT, nameST, getStartNewGame}){
  // ниже тернарный оператор проверяет равны ли очки команд или нет, если нет объявляет победителя.
  return( scoreFT !== scoreST ? (
    <div className="show-the-winner">
      <h3 >Победитель {scoreFT > scoreST ? nameFT : nameST}!</h3> 
      <h5>Набрано {Math.max(scoreFT, scoreST)} очков</h5>
      <button className="save-btn" onClick={getStartNewGame}>Закрыть</button>
    </div>) : (
    <div className="show-the-winner">
      <h3 >Победили обе команды!</h3> 
      <button className="save-btn" onClick={getStartNewGame}>Закрыть</button>
  </div>)
  )
}

export {ShowWinner}