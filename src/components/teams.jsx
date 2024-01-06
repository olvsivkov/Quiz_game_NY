import React, { useState, useEffect } from 'react';

function Team({score, handleGetName}) {
  const [teamName, setTeamName] = useState('');
  const [savedTeamName, setSavedTeamName] = useState('');
  const [onActive, setOnActive] = useState(false)
  
  useEffect(() => {
    handleGetName(savedTeamName);
  }, [savedTeamName, handleGetName]);

  const handleInputChange = (event) => {
    setTeamName(event.target.value);
  };

  const handleSaveClick = () => {
    setSavedTeamName(teamName);
  };

  const handleFormHidden = () => {
    setOnActive(!onActive)
  }

  return (
    <div className="team-wrapper">
      <form>
        <label htmlFor="teamName" onClick={handleFormHidden} className='teamName'>Team Name:</label>
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