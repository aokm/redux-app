const InputTodo = ({ text, onChangeText, onClickAdd }) => {
  return (
    <div className="add-todo">
      <input value={text} onChange={onChangeText} />
      <button onClick={onClickAdd}>追加</button>
    </div>
  );
};

export default InputTodo;
