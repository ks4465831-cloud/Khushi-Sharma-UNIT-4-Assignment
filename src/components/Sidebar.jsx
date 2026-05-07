import { Link } from "react-router-dom";
import {
  FaHome,
  FaBell,
  FaBook,
  FaChartBar,
  FaUser,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>🎓 EduDash</h2>

      <Link to="/">
        <FaHome /> Dashboard
      </Link>

      <Link to="/important-updates">
        <FaBell /> Updates
      </Link>

      <Link to="/attendance">
        <FaBook /> Attendance
      </Link>

      <Link to="/courses">
        <FaBook /> Courses
      </Link>

      <Link to="/performance">
        <FaChartBar /> Performance
      </Link>

      <Link to="/profile">
        <FaUser /> Profile
      </Link>

      <Link to="/settings">
        <FaCog /> Settings
      </Link>
    </div>
  );
}

export default Sidebar;