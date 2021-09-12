import React from 'react';
import { useHistory } from 'react-router-dom';

const Settings = () => {
  const history = useHistory();
  const onClickBack = () => history.goBack();

  return (
    <>
      <h1>設定</h1>
      <button onClick={onClickBack}>戻る</button>
    </>
  );
};

export default Settings;
