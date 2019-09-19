import React, { useState } from 'react';
import styled from 'styled-components';
import faker from 'faker';

import TeamMemberList from './TeamMemberList';
import TeamMemberForm from './TeamMemberForm';

import teamMembersStub from '../api/stubData/teamMembersStub';
const usersStub = teamMembersStub(5);

const StyledTeamMemberContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

function TeamMemberContainer() {
  const [teamMembers, setTeamMembers] = useState(usersStub);

  const addNewTeamMember = teamMember => {
    const newTeamMember = {
      ...teamMember,
      id: Date.now(),
      image: faker.image.avatar(),
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
