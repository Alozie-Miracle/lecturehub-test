import Home from "./containers/Home";
import About from "./containers/About";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./containers/Contact";
import Features from "./containers/Features";
import Testimony from "./containers/Testimony";
import AvailableInstructors from "./containers/AvailableInstructors";
import BoardMembers from "./containers/BoardMembers";
import { useState } from "react";
import Course from "./containers/Course";
import Instructor from "./containers/Instructor";

function App() {
  const [user, setUser] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={<Home user={user} active={active} setActive={setActive} />}
        />
        <Route
          path="/about"
          element={<About user={user} active={active} setActive={setActive} />}
        />
        <Route
          path="/contact"
          element={
            <Contact user={user} active={active} setActive={setActive} />
          }
        />
        <Route
          path="/features"
          element={
            <Features user={user} active={active} setActive={setActive} />
          }
        />
        <Route
          path="/testimonies"
          element={
            <Testimony user={user} active={active} setActive={setActive} />
          }
        />
        <Route
          path="/instructors"
          element={
            <AvailableInstructors
              user={user}
              active={active}
              setActive={setActive}
            />
          }
        />
        <Route
          path="/board-members"
          element={
            <BoardMembers active={active} setActive={setActive} user={user} />
          }
        />
        <Route
          path="/course/:courseId"
          element={<Course active={active} setActive={setActive} user={user} />}
        />
        <Route
          path="/instructor/:intructor"
          element={
            <Instructor active={active} setActive={setActive} user={user} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
