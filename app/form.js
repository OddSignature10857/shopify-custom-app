import React, { useState } from "react";
import { Modal, TextField, Button, FormLayout, Stack } from "@shopify/polaris";

export default function RegisterForm({ isOpen, onClose }) {
  // Form states for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = async () => {
    // Handle registration logic (send data to backend)
    console.log("Registered with:", email, password);
    
    // Close modal after form submission
    onClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      title="Register"
      primaryAction={{
        content: "Register",
        onAction: handleSubmit,
      }}
      secondaryActions={[
        {
          content: "Cancel",
          onAction: onClose,
        },
      ]}
    >
      <Modal.Section>
        <FormLayout>
          <TextField
            label="Email"
            value={email}
            onChange={setEmail}
            autoComplete="email"
          />
          <TextField
            label="Password"
            value={password}
            onChange={setPassword}
            type="password"
            autoComplete="current-password"
          />
        </FormLayout>
      </Modal.Section>
    </Modal>
  );
}
