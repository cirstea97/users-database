import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../api/api";
import { appRoutes } from "../appRoutes";
import { UserType } from "../types";
import Card from "./Card"

function Users() {
  const [users, setUsers] = useState<Array<UserType>>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch users from json placeholder
    getAllUsers()
      .then((json) => setUsers(json));
  }, []);

  const usersArr = users.map((user) => {
    return (
      // Single user card
      <Card user={user}/>
    );
  });

  return (
    <section>
      <div className="main--container--users">
        <h1>These are the users</h1>
        <button
          className="main--container--button"
          onClick={() => {
            navigate(appRoutes.homepage);
          }}
        >
          Back to Homepage
        </button>
        <div className="container--users">
          {usersArr}
        </div>
      </div>
    </section>
  );
}

export default Users;
