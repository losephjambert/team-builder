import React from 'react';

const TeamMember = ({ teamMember, editTeamMember }) => {
  const { name, email, role, image } = teamMember;

  const handleClick = teamMember => {
    editTeamMember(teamMember);
  };

  return (
    <li style={{ marginBottom: '25px', outline: '1px solid red' }}>
      <h3>{name}</h3>
      <img src={image} alt='Team member avatar' />
      <p>{role}</p>
      <p>{email}</p>
      <button onClick={() => handleClick(teamMember)}>Edit</button>
    </li>
  );
};

export default TeamMember;
