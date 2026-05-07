function Navbar({ darkMode, setDarkMode }) {
  return (
    <div className="topbar">
      <input type="text" placeholder="Search..." />

      <div className="top-actions">
        <button>🔔</button>

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌙" : "☀"}
        </button>

        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="profile-img"
        />
      </div>
    </div>
  );
}

export default Navbar;