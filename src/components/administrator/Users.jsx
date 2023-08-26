import React from "react";
import Cliente from "./User/Cliente";
import "./user.css";

const Users = ({ user }) => {
  return (
    <div>
      {user.users?.map((cliente) => (
        <Cliente id={cliente.id} datos={cliente} />
      ))}
    </div>
  );
};

export default Users;
