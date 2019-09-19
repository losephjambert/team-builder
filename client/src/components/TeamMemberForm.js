import React, { useState, useEffect } from 'react';

const emptyTeamMember = {
  name: '',
  email: '',
  role: '',
};

const TeamMemberForm = ({ submitForm, teamMemberToEdit, isEditing }) => {
  const [teamMember, setTeamMember] = useState(emptyTeamMember);

  useEffect(() => {
    teamMemberToEdit && setTeamMember(teamMemberToEdit);
  }, [teamMemberToEdit]);

  const handleChange = e => {
    setTeamMember({
      ...teamMember,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    submitForm(teamMember);
    setTeamMember(emptyTeamMember);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' placeholder='name' value={teamMember.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor='email'>E-mail</label>
        <input
          type='text'
          id='email'
          name='email'
          placeholder='name@example.com'
          value={teamMember.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='role'>Role</label>
        <input type='text' id='role' name='role' placeholder='Role' value={teamMember.role} onChange={handleChange} />
      </div>
      <button type='submit'>{isEditing ? 'Edit Team Member' : 'Add Team Member'}</button>
    </form>
  );
};

export default TeamMemberForm;
