import { Password } from "@mui/icons-material";
import React, { useState } from "react";
import Input from "../Component/Input";
import Button from "../Component/Button";

import { useNavigate } from "react-router-dom";

const Authentification = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const authenticate = () => {
    const user = {
      username,
      password,
    };
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <div className="login-contained">
      <Input label="Username" onChange={setUsername} value={username} />
      <Input
        label="Password"
        type="password"
        onChange={setPassword}
        value={password}
      />
      <Button onClick={authenticate} title="SUBMIT" />
    </div>
  );
};

export default Authentification;
