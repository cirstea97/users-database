import React from "react";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../appRoutes";

function Homepage() {
  const navigate = useNavigate();
  return (
    <section>
      <div className="container--homepage">
        <h1>Homepage</h1>
        <br />
        <button
          onClick={() => {
            navigate(appRoutes.users);
          }}
        >
          Click to go to the users page
        </button>

        <p className="homepage--paragraph">
          Hello there!👋 This is a React project in which I am using TypeScript.
          In this project I made an API call in order to get the database of
          users from the website "https://jsonplaceholder.typicode.com/users".
          Using React Hooks (useState, useEffect, useParams) and React Routing I
          have managed to create a simple website in which I am listing these
          users with some basic information. Of course, if you want to find out
          more about them you can always click the buttons that I've created so
          that you can get into a new page in which I am listing even more
          information about these random users. You can get to the users page by
          pressing the button that's on top of this paragraph. Thank you!
        </p>
      </div>
    </section>
  );
}

export default Homepage;
