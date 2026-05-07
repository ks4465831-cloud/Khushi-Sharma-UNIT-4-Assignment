import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Profile({ darkMode, setDarkMode }) {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="box">
          <h1>👩 Student Profile</h1>
          <p>Name: Khushi</p>
          <p>Course: BCA (AI & DS)</p>
          <p>Semester: 2nd</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;