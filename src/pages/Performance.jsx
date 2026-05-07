import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ChartSection from "../components/ChartSection";

function Performance({ darkMode, setDarkMode }) {
  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <ChartSection />
      </div>
    </div>
  );
}

export default Performance;