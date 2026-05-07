import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Dashboard from "./pages/Dashboard";
import Updates from "./pages/Updates";
import Attendance from "./pages/Attendance";
import Courses from "./pages/Courses";
import Performance from "./pages/Performance";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />

          <Route
            path="/important-updates"
            element={
              <Updates
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />

          <Route
            path="/attendance"
            element={
              <Attendance
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />

          <Route
            path="/courses"
            element={
              <Courses
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />

          <Route
            path="/performance"
            element={
              <Performance
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />

          <Route
            path="/profile"
            element={
              <Profile
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />

          <Route
            path="/settings"
            element={
              <Settings
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;