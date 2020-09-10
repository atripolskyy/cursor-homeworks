import React from 'react';

const Contact = ({firstName, lastName, phone, gender}) => {
  return (
    <tr className="contact">
      <td>
        <div><b>{firstName} {lastName}</b></div>
        <div className="gender">{gender}</div>
      </td>
      <td>{phone}</td>
    </tr>
  );
}

export default Contact;
