import * as React from "react";
import Button from "react-bootstrap/Button";
import { Router, Route, Link } from "react-router-dom";
import Axios from 'axios';

const LogOutBtn = (props: any) => {

  const logOut = () => {
      Axios({
          method: "get",
          url: "http://localhost:8080/auth/logout"
      })
      .then(
        response => {
          console.log("anyad");
        },
        error => {
          console.log(error);
        }
      )
  }  
    return (
      <Link to="/">
        <Button 
        variant="outline-light" 
        style={{color: 'grey'}}
        onClick={(_event: any) => {
            logOut();
          }}
        >Logout</Button>
      </Link>
    );
  }


export default LogOutBtn;
