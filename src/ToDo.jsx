import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDo() {
  let [toDos, setToDos] = useState([
    { id: uuidv4(), task: "sample task", isDone: false },
  ]);
  let [newToDo, setNewToDo] = useState();

  let updateToDos = () => {
    setToDos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), task: newToDo }];
    });
    setNewToDo("");
  };
  let updateNewToDo = (event) => {
    setNewToDo(event.target.value);
  };

  let deleteToDo = (id) => {
    setToDos((prevTodos) =>
      prevTodos.filter((prevTodo) => {
        return prevTodo.id != id;
      })
    );
  };

  let isDoneAll = () => {
    setToDos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  let isDoneOne = (id) => {
    setToDos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        }else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <input
        placeholder="todo"
        value={newToDo}
        onChange={updateNewToDo}
      ></input>
      <br />
      <button onClick={updateToDos}>Add task</button>
      <hr />
      <p>Tasks to do</p>
      <ul>
        {toDos.map((val) => (
          <li key={val.id}>
            <span
              style={val.isDone ? { textDecorationLine: "line-through" } : {}}
            >
              {val.task}
            </span>
            &nbsp;&nbsp;
            <button onClick={() => deleteToDo(val.id)}>delete</button>
            &nbsp;
            <button onClick={() => isDoneOne(val.id)}>completed</button>
          </li>
        ))}
      </ul>
      <button onClick={isDoneAll}>All done</button>
    </div>
  );
}
