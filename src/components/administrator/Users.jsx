import React from "react";
import Cliente from "./User/Cliente";
import "./user.css";

const Users = ({ user }) => {
  return (
    <div className="Users">
      {user.users?.map((cliente) => (
        <Cliente key={cliente.id} id={cliente.id} datos={cliente} />
      ))}
    </div>
  );
};

export default Users;
