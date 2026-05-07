import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Courses({ darkMode, setDarkMode }) {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Navbar 
            darkMode={darkMode}
            setDarkMode={setDarkMode}
        />

        <div className="box">
          <h1>📚 Courses</h1>

          <ul>
            <li>Frontend Development</li>
            <li>Cloud Computing</li>
            <li>Discrete Mathematics</li>
            <li>Data Structures</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Courses;