import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const EmployeeHome = () => {
  const history = useHistory();
  const onClickSettings = () => {
    history.push('/Employee/settings/1');
  };

  return (
    <>
      <div>従業員Home</div>
      <Link to="/Employee/login">ログイン</Link>
      <br />
      <Link to={{ pathname: '/Employee/profile/1?isLogin=true', state: 'test test' }}>プロフィール</Link>
      <br />
      <button onClick={onClickSettings}>設定</button>
    </>
  );
};

export default EmployeeHome;
