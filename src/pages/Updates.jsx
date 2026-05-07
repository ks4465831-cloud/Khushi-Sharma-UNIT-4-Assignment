import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Updates({ darkMode, setDarkMode }) {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="box">
          <h1>📢 Important Updates</h1>

          <ul>
            <li>End term starts from 20 May</li>
            <li>Practical exams next week</li>
            <li>Hackathon registration open</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Updates;