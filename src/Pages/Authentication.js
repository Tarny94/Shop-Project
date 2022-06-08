import React, { useState } from "react";
import Input from "../Component/Input";
import Button from "../Component/Button";
import { useNavigate } from "react-router-dom";

const Authentification = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const authenticate = () => {
    if (username !== "" && password !== "") {
      const user = {
        username,
        password,
      };
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/admin");
    }
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
      <Button onClick={authenticate} title="SUBMIT" className="mui-button" />
    </div>
  );
};

export default Authentification;
