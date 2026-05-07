import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Attendance({ darkMode, setDarkMode }) {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Navbar  
            darkMode={darkMode}
            setDarkMode={setDarkMode}
        />

        <div className="box">
          <h1>📅 Attendance</h1>

          <h2>Current Attendance: 86%</h2>
        </div>
      </div>
    </div>
  );
}

export default Attendance;  