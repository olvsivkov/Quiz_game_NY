import { ItemRow } from "./itemRow"
import json from "../DB/data.json"

function Main() {
  const dataArray = json.countries
  return (
    <div className="main-wrapper">
      {
        dataArray.map( (_, index) => <ItemRow key={index} data={json.countries} index={index}/> )
      }
    </div>
  )
}

export {Main}