const IncompleteTodoList = ({ incompleteTodoList, onClickComplete, onClickDelete }) => {
  return (
    <>
      <h3>未完了のTODO</h3>
      <div className="incomplete-todos">
        <ul>
          {incompleteTodoList.map((todo, index) => (
            <div key={index} className="incomplete-todo">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default IncompleteTodoList;
