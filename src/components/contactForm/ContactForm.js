import React from "react";

export const ContactForm = (props) => {
  const handleNameChange = (event) => {
    props.setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    props.setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    props.setPhone(event.target.value);
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={props.name}
        onChange={handleNameChange}
      />
      <input
        type="email"
        placeholder="Email"
        value={props.email}
        onChange={handleEmailChange}
      />
      <input
        type="tel"
        placeholder="Phone"
        value={props.phone}
        onChange={handlePhoneChange}
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};
