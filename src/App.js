// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Form,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
// import { Button } from "bootstrap";
// import { InputGroupText } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <h1 className="mt-4">Todo リスト</h1>
        <Form>
          <InputGroup>
            <FormControl type="text" value="入力してね" />
            <InputGroup.Text addonType="append">
              <Button type="submit">追加</Button>
            </InputGroup.Text>
          </InputGroup>
        </Form>
      </Container>
    </div>
  );
}

export default App;
