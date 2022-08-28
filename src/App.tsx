import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Users from "./components/Users";
import SingleUser from "./components/SingleUser";
import ErrorPage from "./components/ErrorPage";
import "./App.css";
import {appRoutes} from './appRoutes'

function App() {
  return (
    <Router>
      <Routes>
        <Route path={appRoutes.homepage} element={<Homepage />} />
        <Route path={appRoutes.users} element={<Users />} />
        <Route path={`${appRoutes.users}:userId`} element={<SingleUser />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
