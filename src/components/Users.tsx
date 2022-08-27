import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserIcon from "../usericon.png";

export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: { street: string; suite: string; city: string; zipcode: string };
  company: { name: string };
};

type UsersType = Array<UserType>;

function Users() {
  const [users, setUsers] = useState<UsersType>([]);
  let navigate = useNavigate();

  useEffect(() => {
    // Fetch users from json placeholder
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  const usersArr = users.map((user) => {
    return (
      // Single user card
      <div className="users--card" key={user.id}>
        <img alt="userIcon" src={UserIcon} />
        <p>{user.name}</p>
        <p>{user.email}</p>
        <Link to={`/users/${user.id}`}>
          <button>Go to the user's profile.</button>
        </Link>
      </div>
    );
  });

  return (
    <section>
      <div className="main--container--users">
        <h1>These are the users</h1>
        <button
          className="main--container--button"
          onClick={() => {
            navigate("/");
          }}
        >
          Back to Homepage
        </button>
        <div className="container--users">
          {usersArr[0]}
          {usersArr[1]}
          {usersArr[2]}
        </div>
        <div className="container--users">
          {usersArr[3]}
          {usersArr[4]}
          {usersArr[5]}
        </div>
      </div>
    </section>
  );
}

export default Users;
