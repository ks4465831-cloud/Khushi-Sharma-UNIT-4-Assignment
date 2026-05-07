import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Settings({ darkMode, setDarkMode }) {
  return (
    <div className="layout">
      <Sidebar />

       <div className="main">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="box">
          <h1>⚙ Settings</h1>

          <button>Enable Dark Mode</button>
        </div>
      </div>
    </div>
  );
}

export default Settings;