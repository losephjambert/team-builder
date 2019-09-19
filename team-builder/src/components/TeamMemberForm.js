import React, { useState } from "react";

const initialTeamMember = {
  name: "",
  email: "",
  role: ""
};

const TeamMemberForm = ({ submitForm }) => {
  const [teamMember, setTeamMember] = useState(initialTeamMember);

  const handleChange = e => {
    setTeamMember({
      ...teamMember,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    submitForm(teamMember);
    setTeamMember(initialTeamMember);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          value={teamMember.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="name@example.com"
          value={teamMember.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <input
          type="text"
          id="role"
          name="role"
          placeholder="Role"
          value={teamMember.role}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Team Member</button>
    </form>
  );
};

export default TeamMemberForm;
