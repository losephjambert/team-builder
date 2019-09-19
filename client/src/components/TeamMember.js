import React from 'react';

const TeamMember = ({ id, name, email, role }) => {
  const handleClick = id => {
    console.log('team member id: ', id);
  };

  return (
    <li>
      <h3>{name}</h3>
      <p>{role}</p>
      <p>{email}</p>
      <button onClick={() => handleClick(id)}>Edit</button>
    </li>
  );
};

export default TeamMember;
