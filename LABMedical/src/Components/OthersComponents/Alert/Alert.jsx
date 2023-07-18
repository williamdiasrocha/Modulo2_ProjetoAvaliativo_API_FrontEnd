import React, { useState } from "react";
import { Alert } from "react-bootstrap";

function AlertComponent() {
  const [showAlert, setShowAlert] = useState(true);

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <div>
      {showAlert && (
        <Alert variant="warning" onClose={handleAlertClose} dismissible>
          Funcionalidade em construção
        </Alert>
      )}
    </div>
  );
}

export default AlertComponent;
