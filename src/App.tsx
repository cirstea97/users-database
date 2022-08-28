import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Users from "./components/Users";
import SingleUser from "./components/SingleUser";
import ErrorPage from "./components/ErrorPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/users-database" element={<Homepage />} />
        <Route path="/users-database/users" element={<Users />} />
        <Route path="/users-database/users/:userId" element={<SingleUser />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
