import * as React from "react";
import Button from "react-bootstrap/Button";
import { Router, Route, Link } from "react-router-dom";

class HomeBtn extends React.Component<any> {
  render() {
    return (
      <Link to="/">
        <Button variant="outline-light">Home</Button>
      </Link>
    );
  }
}

export default HomeBtn;
