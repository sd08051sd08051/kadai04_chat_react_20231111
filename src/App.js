// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Form,
  InputGroup,
  FormControl,
  Button,
  Table,
} from "react-bootstrap";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (text) => {
    const newTodos = [...todos, { text, complete: false }];
    setTodos(newTodos);
    console.log(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const completetodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
    console.log(newTodos);
  };

  return (
    <div className="App">
      <Container>
        <h1 className="mt-4">Todo リスト</h1>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <FormControl
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <InputGroup.Text addonType="append">
              <Button type="submit">追加</Button>
            </InputGroup.Text>
          </InputGroup>
        </Form>
      </Container>
      <Container>
        <Table>
          <tbody>
            {todos &&
              todos.map((todo, index) => (
                <tr key={index}>
                  <th
                    className="text-start"
                    style={{
                      textDecoration: todo.complete ? "line-through" : "",
                    }}
                  >
                    {todo.text}
                  </th>
                  <td className="text-end">
                    <Button
                      variant={todo.complete ? "secondary" : "success"}
                      className="me-2"
                      onClick={() => completetodo(index)}
                    >
                      {todo.complete ? "完了" : "未完了"}
                    </Button>
                    <Button
                      variant="danger"
                      className="ms-2"
                      onClick={() => removeTodo(index)}
                    >
                      削除
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
