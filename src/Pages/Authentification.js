import { Password } from "@mui/icons-material";
import React from "react";
import Input from "../Component/Input";
import Button from "../Component/Button";

const Authentification = () => {
  return (
    <div className="login-contained">
      <Input label="Username" />
      <Input label="Password" type="password" />
      <Button title="SUBMIT" />
    </div>
  );
};

export default Authentification;
