import { Password } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Input from "../Component/Input";
import Button from "../Component/Button";

const Authentification = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const authenticate = () => {
    const user = {
      username,
      password,
    };

    console.log(user);
    console.log(user);
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
