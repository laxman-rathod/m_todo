import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isToggle, setIsToggle] = useState(false);
  const handleClickToggle = () => {
    setIsToggle(!isToggle);
    document.body.classList.toggle("light-mode"); // Toggle the 'light-mode' class on body
  };

  // Cleanup function for event listener
  useEffect(() => {
    return () => {
      document.body.classList.remove("light-mode"); // Remove 'light-mode' class on component unmount
    };
  }, []);

  return (
    <div
      className={`dark-light ${isToggle && "light-mode"}`}
      onClick={handleClickToggle}
    >
      <svg
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    </div>
  );
};

export default ThemeToggle;
