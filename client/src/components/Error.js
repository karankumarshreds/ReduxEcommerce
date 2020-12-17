import React, { useState } from "react";
import { Alert } from "react-bootstrap";
const Error = ({ message }) => {
  const [show, setShow] = useState(true);
  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>{message}</p>
      </Alert>
    );
  } else {
    return <></>;
  }
};

export default Error;
