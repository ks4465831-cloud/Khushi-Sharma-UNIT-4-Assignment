import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import ChartSection from "../components/ChartSection";

function Dashboard({ darkMode, setDarkMode }) {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Navbar
           darkMode={darkMode}
           setDarkMode={setDarkMode} 
        
        />

        <div className="welcome-box">
          <h1>Advanced Student Dashboard</h1>
          <p>Welcome back, Khushi 👋</p>
        </div>
         <div className="stats-grid">
          <StatCard title="CGPA" value="9.8" icon="📊" />
          <StatCard title="Attendance" value="86%" icon="📅" />
          <StatCard title="Assignments" value="3 Pending" icon="📚" />
          <StatCard title="Credits" value="93" icon="🏆" />
        </div>

        <ChartSection />

        <div className="bottom-grid">
          <div className="box">
            <h2>📌 Upcoming Deadlines</h2>
            <ul>
              <li>DSA Project - 20 May</li>
              <li>Cloud Viva - 25 May</li>
              <li>Maths Quiz - 29 May</li>
            </ul>
          </div>
          <div className="box">
            <h2>📖 Courses</h2>
            <ul>
              <li>Frontend Development</li>
              <li>Cloud Computing</li>
              <li>Data Structures</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;