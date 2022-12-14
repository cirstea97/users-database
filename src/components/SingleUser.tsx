import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById } from "../api/api";
import { appRoutes } from "../appRoutes";
import { UserType } from "../types";

function SingleUser() {
  const navigate = useNavigate();
  const params = useParams();
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
        // Fetch single user from json placeholder
    if (params.userId){
      getUserById(params.userId)
      .then((json) => setUser(json));
    }
  }, [params]);

  return (
    <section>
      <>
        {user && (
          <div className="container--single--user">
            <div>
              <h1>This is the profile page for {user.name}!</h1>
            </div>
            <div className="div--information" key={user.id}>
              <p>- name: {user.name}</p>
              <p>- username: {user.username}</p>
              <p>- email: {user.email}</p>
              <p>- phone: {user.phone}</p>
              <p>- company: {user.company.name}</p>
              <p>- website: {user.website}</p>
              <p>- address:</p>
              <ul>
                <li>{user.address.street}</li>
                <li>{user.address.suite}</li>
                <li>{user.address.city}</li>
                <li>{user.address.zipcode}</li>
              </ul>
            </div>
            <button
              onClick={() => {
                navigate(appRoutes.users);
              }}
            >
              Go to users page
            </button>
          </div>
        )}
      </>
    </section>
  );
}

export default SingleUser;
