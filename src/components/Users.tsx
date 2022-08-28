import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllUsers } from "../api/api";
import { appRoutes } from "../appRoutes";
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
    getAllUsers()
      .then((json) => setUsers(json));
  }, []);

  const usersArr = users.map((user) => {
    return (
      // Single user card
      <div className="users--card" key={user.id}>
        <img alt="userIcon" src={UserIcon} />
        <p>{user.name}</p>
        <p>{user.email}</p>
        <Link to={`${appRoutes.users}${user.id}`}>
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
