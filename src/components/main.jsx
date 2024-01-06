import React,{useState} from "react"
import { ItemRow } from "./itemRow"
import { Team } from "./teams"
import json from "../DB/data.json"

function Main() {

  const [scoreFT, setScoreFT] = useState(0)
  const [scoreST, setScoreST] = useState(0)
  const [nameFT, setNameFT] = useState("Team 1")
  const [nameST, setNameST] = useState("Team 2")


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

  const dataArray = json.items
  return (  
    <div className="main-wrapper">
      <Team 
        score={scoreFT}
        handleGetName={handleGetNameFT}
      />
      <div className="main-wrapper-centre">
        {
          dataArray.map( (_, index) => <ItemRow 
            key={index} 
            data={dataArray} 
            index={index} 
            handleScoreFT={handleScoreFT}
            handleScoreST={handleScoreST}
            nameFT={nameFT}
            nameST={nameST}
          /> )
        }
      </div>
      <Team 
        score={scoreST}
        handleGetName={handleGetNameST}
      />
    </div>
  )
}

export {Main}