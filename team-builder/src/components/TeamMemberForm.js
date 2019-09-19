import React from "react";

const TeamMemberForm = props => {
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="name" />
      </div>
    </form>
  );
};

export default TeamMemberForm;
