import React from 'react';
import axios from 'axios';

function SendEmail({email}) {
  const handleClick = () => {
    axios.post('/send-email', { email }).then(() => {
      console.log("Email sent successfully!");
    });
  };

  return (
    <button onClick={handleClick}>Send Email</button>
  );
}

export default SendEmail;