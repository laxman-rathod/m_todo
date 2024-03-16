import { useSelector } from "react-redux";

const HomeNavbar = ({
  handleTabChange,
  isFavoriteTabActive,
  favoriteTodos,
}) => {
  const originalTodos = useSelector((store) => store.todos.items);
  return (
    <div className="header-menu mt-4">
      <button
        className={!isFavoriteTabActive ? "menu-link is-active" : "menu-link"}
        onClick={() => handleTabChange(false)}
      >
        All ({originalTodos.length})
      </button>
      <button
        className={isFavoriteTabActive ? "menu-link is-active" : "menu-link"}
        onClick={() => handleTabChange(true)}
      >
        Favorite ({favoriteTodos.length})
      </button>
    </div>
  );
};

export default HomeNavbar;
