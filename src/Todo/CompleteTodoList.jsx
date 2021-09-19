const CompleteTodoList = ({ completeTodoList, onClickIncomplete }) => {
  return (
    <>
      <h3>完了のTODO</h3>
      <div className="complete-todos">
        <ul>
          {completeTodoList.map((todo, index) => (
            <div key={index} className="complete-todo">
              <li>
                {todo}
                <button onClick={() => onClickIncomplete(index)}>戻す</button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CompleteTodoList;
