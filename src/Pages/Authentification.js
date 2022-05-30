import { Password } from "@mui/icons-material";
import React, { useContext, useEffect, useState } from "react";
import Input from "../Component/Input";
import Button from "../Component/Button";
import { ProductsContext } from "./ProductsProvider";
import { useNavigate } from "react-router-dom";

const Authentification = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { onChange } = useContext(ProductsContext);
  const navigate = useNavigate();

  if (username === "" && password === "") {
    onChange(false);
  }
  const authenticate = () => {
    const user = {
      username,
      password,
    };
    if (user.username !== "" && user.password !== "") {
      onChange(true);
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
      <Button onClick={authenticate} title="SUBMIT" />
    </div>
  );
};

export default Authentification;
