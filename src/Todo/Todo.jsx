import React, { useState } from "react";

import Header from "../components/Header";
import InputTodo from "./InputTodo";
import IncompleteTodoList from "./IncompleteTodoList";
import CompleteTodoList from "./CompleteTodoList";
import "./todo.scss";

const Todo = () => {
  const [text, setText] = useState("");
  const [incompleteTodoList, setIncompleteTodoList] = useState([]);
  const [completeTodoList, setCompleteTodoList] = useState([]);

  const onChangeText = (e) => setText(e.target.value);
  const onClickAdd = () => {
    if (!text.trim()) return;
    setIncompleteTodoList([...incompleteTodoList, text]);
    setText("");
  };
  const onClickComplete = (index) => {
    const tmp = [...incompleteTodoList];
    tmp.splice(index, 1);
    setIncompleteTodoList(tmp);
    setCompleteTodoList([...completeTodoList, incompleteTodoList[index]]);
  };
  const onClickDelete = (index) => {
    const tmp = [...incompleteTodoList];
    tmp.splice(index, 1);
    setIncompleteTodoList(tmp);
  };

  const onClickIncomplete = (index) => {
    const tmp = [...completeTodoList];
    tmp.splice(index, 1);
    setCompleteTodoList(tmp);
    setIncompleteTodoList([...incompleteTodoList, completeTodoList[index]]);
  };

  return (
    <>
      <Header />
      <div className="todo">
        <h1>Todo</h1>
        <InputTodo text={text} onChangeText={onChangeText} onClickAdd={onClickAdd} />
        <IncompleteTodoList
          incompleteTodoList={incompleteTodoList}
          onClickComplete={onClickComplete}
          onClickDelete={onClickDelete}
        />
        <CompleteTodoList completeTodoList={completeTodoList} onClickIncomplete={onClickIncomplete} />
      </div>
    </>
  );
};

export default Todo;
