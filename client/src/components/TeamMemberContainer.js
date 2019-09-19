import React, { useState } from 'react';
import styled from 'styled-components';

import TeamMemberList from './TeamMemberList';
import TeamMemberForm from './TeamMemberForm';

const StyledTeamMemberContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

function TeamMemberContainer() {
  const [teamMembers, setTeamMembers] = useState([]);

  const addNewTeamMember = teamMember => {
    const newTeamMember = {
      ...teamMember,
      id: Date.now(),
    };
    setTeamMembers([...teamMembers, newTeamMember]);
  };

  return (
    <StyledTeamMemberContainerWrapper>
      <div>
        <TeamMemberForm submitForm={addNewTeamMember} />
      </div>
      <div>
        <TeamMemberList teamMembers={teamMembers} />
      </div>
    </StyledTeamMemberContainerWrapper>
  );
}

export default TeamMemberContainer;
