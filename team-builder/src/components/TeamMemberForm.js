import React, { useState } from "react";

const TeamMemberForm = props => {
  const [teamMember, setTeamMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChange = e => {
    console.log(e.target.value);
    setTeamMember({
      ...teamMember,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
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
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default TeamMemberForm;
