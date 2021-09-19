import React from "react";
import { useParams, useLocation } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const { search, state } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <>
      <h1>従業員プロフィールページ</h1>
      <p>パラーメーターのidは{id}</p>
      <p>パラーメーターのqueryは{query.get("isLogin")}</p>
      <p>stateは{state}</p>
    </>
  );
};

export default Profile;
