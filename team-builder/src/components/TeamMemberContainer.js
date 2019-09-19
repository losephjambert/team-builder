import React, { useState } from "react";
import TeamMemberList from "./TeamMemberList";
import TeamMemberForm from "./TeamMemberForm";

function TeamMemberContainer() {
  const [teamMembers, setTeamMembers] = useState([]);

  return (
    <div>
      <TeamMemberList />
      <TeamMemberForm />
    </div>
  );
}

export default TeamMemberContainer;
