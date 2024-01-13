import React, { useState, useEffect } from 'react';

function Team({score, handleGetName}) {
  const [teamName, setTeamName] = useState(''); // добавляет ввод имени коменды в state
  const [savedTeamName, setSavedTeamName] = useState(''); // сохраняет имя команды
  const [onActive, setOnActive] = useState(false) // скрывает форму ввода

  
  useEffect(() => {
    handleGetName(savedTeamName);
  }, [savedTeamName, handleGetName]);

  const handleInputChange = (event) => {
    setTeamName(event.target.value);
  };

  const handleSaveClick = () => {
    setSavedTeamName(teamName);
    handleFormHidden()
  };

  const handleFormHidden = () => {
    setOnActive(!onActive)
  }

  return (
    <div className="team-wrapper" data-testid="team-wrapper">
      <form>
        <label htmlFor="teamName"  className='teamName'>Team Name:</label> 
        <span className='change-fa-edit' onClick={handleFormHidden}>
          <i className='fa fa-edit' >
        </i></span>
        <input type="text" id="teamName" value={teamName} onChange={handleInputChange} className={onActive ? "hidden": '' } autoComplete="off"/>
        <button type="button" onClick={handleSaveClick} className={onActive ? " hidden": "save-btn"}>Save</button>
      </form>
      <h4>{savedTeamName}</h4>
      <div className='total-account'>
        <p>{score}</p>
      </div>
    </div>
  );
}

export { Team };