import React from "react";

export const ContactPicker = (props) => {
  const { contacts, onChange } = props;
  return (
    <select onChange={onChange}>
      <option value="" selected="selected">
        No Contact Selected
      </option>
      {contacts.map((contact) => (
        <option key={contact.name} value={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );
};
