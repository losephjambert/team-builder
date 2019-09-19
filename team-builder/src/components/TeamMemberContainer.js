import React, { useState } from "react";
import TeamMemberList from "./TeamMemberList";
import TeamMemberForm from "./TeamMemberForm";

function TeamMemberContainer() {
  const [teamMembers, setTeamMembers] = useState([]);

  const addNewTeamMember = teamMember => {
    const newTeamMember = {
      ...teamMember,
      id: Date.now()
    };
    setTeamMembers([...teamMembers, newTeamMember]);
  };

  return (
    <div>
      <TeamMemberList teamMembers={teamMembers} />
      <TeamMemberForm submitForm={addNewTeamMember} />
    </div>
  );
}

export default TeamMemberContainer;
