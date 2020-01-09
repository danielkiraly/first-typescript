import React, { useState } from "react";
import { AuthForm } from "./Auth.components";
import { onLogin } from "./auth.api.login";
import HomeBtn from "components/HomeBtn";

const LoginPage = (props: any) => {
  const [{ username, password }, setCredentials] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");

  const login = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await onLogin({
      username,
      password
    });

    if (response && response.error) {
      setError(response.error);
      console.log(error);
      props.history.push("/login");
    }
    props.history.push("/");
  };
  return (
    <React.Fragment>
      <HomeBtn />>
      <AuthForm onSubmit={login}>
        <label htmlFor="username">Username</label>
        <input
          placeholder="Username"
          value={username}
          onChange={event =>
            setCredentials({
              username: event.target.value,
              password
            })
          }
        />
        <label htmlFor="password">Password</label>
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={event =>
            setCredentials({
              username,
              password: event.target.value
            })
          }
        />
        <button type="submit">Login</button>
        {error.length > 0 && <p>{error}</p>}
      </AuthForm>
    </React.Fragment>
  );
};

export default LoginPage;
