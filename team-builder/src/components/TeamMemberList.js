import React from "react";
import TeamMember from "./TeamMember";

const TeamMemberList = ({ teamMembers }) => {
  return (
    <div>
      <h2>Team Members</h2>
      <ul>
        {teamMembers.map(teamMember => (
          <TeamMember key={teamMember.id} {...teamMember} />
        ))}
      </ul>
    </div>
  );
};

export default TeamMemberList;
