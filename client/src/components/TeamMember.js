import React from "react";

const TeamMember = ({ id, name, email, role }) => {
  return (
    <li>
      <h3>{name}</h3>
      <p>{role}</p>
      <p>{email}</p>
    </li>
  );
};

export default TeamMember;
