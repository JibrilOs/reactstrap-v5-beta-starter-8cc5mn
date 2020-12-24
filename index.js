import React, { Component } from "react";
import { render } from "react-dom";
import Example from "./Example";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

class App extends Component {
  constructor() {
    super();
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      email: "",
      name: ""
    };
  }

  onFormSubmit() {
    alert(JSON.stringify(this.state, null, "  "));
  }

  render() {
    return (
      <Container className="p-5">
        <Example />
        <Form onSubmit={this.onFormSubmit}>
          <FormGroup>
            <Label>Name:</Label>
            <Input
              type="text"
              name="text"
              placeholder="Name"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label>Email:</Label>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </FormGroup>
          <Button type="submit" color="primary">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

render(<App />, document.getElementById("root"));
