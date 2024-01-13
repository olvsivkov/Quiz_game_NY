import React,{useState} from "react"
import ItemRow from "./itemRow"
import { Team } from "./teams"
import { ShowWinner } from "./showWinner"
import json from "../DB/data.json" // вопросы + ответы из базы данных

function Main() {

  const [scoreFT, setScoreFT] = useState(0) // считает очки левой команды
  const [scoreST, setScoreST] = useState(0) // считает очки правой команды
  const [nameFT, setNameFT] = useState("Team 1") // название левой команды
  const [nameST, setNameST] = useState("Team 2") // название правой команды
  const [questionCount, setQuestionCount] = useState(0) // подсчет кол-ва вопросов на которые ответили, если 30, то объявляется победитель <ShowWinner/>

  function handleScoreFT(arg) {
    setScoreFT(scoreFT + (+arg))
  }
  function handleScoreST(arg) {
    setScoreST(scoreST + (+arg))
  }
  function handleGetNameFT(teamName){
    setNameFT(teamName)
  }
  function handleGetNameST(teamName){
    setNameST(teamName)
  }
  function getQuestionCount(count){
    setQuestionCount(questionCount + count)
  }
  function getStartNewGame(){ // после объявления победителя перезагружается окно, чтоб начать новую игру.
    window.location.reload()
  }

  const dataArray = json.items
  return (  
    <div className="main-wrapper" data-testid="main-wrapper-element">
      <Team 
        score={scoreFT}
        handleGetName={handleGetNameFT}
      />
      <div className="main-wrapper-centre" data-testid="main-wrapper-centre">
        {
          dataArray.map( (_, index) => <ItemRow 
            key={index} 
            data={dataArray} 
            index={index} 
            handleScoreFT={handleScoreFT}
            handleScoreST={handleScoreST}
            nameFT={nameFT}
            nameST={nameST}
            getQuestionCount={getQuestionCount}
          /> )
        }
      </div>
      <Team 
        score={scoreST}
        handleGetName={handleGetNameST}
      />
      {questionCount >= 30 ? 
        <ShowWinner
          scoreFT={scoreFT}
          scoreST={scoreST}
          nameFT={nameFT}
          nameST={nameST}
          getStartNewGame={getStartNewGame}
        /> : ""}
    </div>
  )
}

export default Main