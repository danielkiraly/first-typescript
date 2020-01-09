import React, { useState } from "react";
import { AuthForm } from "./Auth.components";
import { onRegistration } from "./auth.api";
import HomeBtn from "components/HomeBtn";

const RegistrationPage = (props: any) => {
  const [{ username, password }, setCredentials] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");

  const login = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await onRegistration({
      username,
      password
    });
    if (response && response.error) {
      setError(response.error);
      props.history.push("/registration");
    }
    props.history.push("/");

  };
  return (
    <React.Fragment>
      <HomeBtn />
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
        <button type="submit">Register</button>
        {error.length > 0 && <p>{error}</p>}
      </AuthForm>
    </React.Fragment>
  );
};

export default RegistrationPage;
