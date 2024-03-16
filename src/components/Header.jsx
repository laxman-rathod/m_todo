import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <div className="header">
      <div className="menu-circle"></div>

      <div className="search-bar">
        <input type="text" placeholder="Search a Task" />
      </div>

      <div className="header-profile">
        <ThemeToggle />
        <div className="notification">
          <span className="notification-number">7</span>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-bell"
          >
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
          </svg>
        </div>

        <img
          className="profile-img"
          src="https://images.unsplash.com/photo-1600353068440-6361ef3a86e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
