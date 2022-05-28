import { Password } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
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
    logAdmin();
  };

  useEffect(() => {
    if (username !== "" && password !== "") {
      authenticate();
    } else {
      log();
    }
  }, []);

  const logAdmin = () => {
    navigate("/");
  };
  const log = () => {
    navigate("/admin/login");
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
