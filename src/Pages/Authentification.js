import { Password } from "@mui/icons-material";
import React, { useContext, useEffect, useState } from "react";
import Input from "../Component/Input";
import Button from "../Component/Button";
import { ProductsContext } from "./ProductsProvider";
import { useNavigate } from "react-router-dom";

const Authentification = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { onChange } = useContext(ProductsContext);
  let user = {};

  useEffect(() => {
    const data = localStorage.getItem("login");
    console.log(data);
  }, []);

  const authenticate = () => {
    if (username !== "" && password !== "") {
      user = {
        username,
        password,
      };
      logAdmin();
      onChange(true);
      localStorage.setItem("login", JSON.stringify(user));
    }
  };

  useEffect(() => {
    if (user.username !== "" && user.password !== "") {
      authenticate();
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
      <Input label="Username" onChange={setUsername} value={user.username} />
      <Input
        label="Password"
        type="password"
        onChange={setPassword}
        value={user.password}
      />
      <Button onClick={authenticate} title="SUBMIT" />
    </div>
  );
};

export default Authentification;
