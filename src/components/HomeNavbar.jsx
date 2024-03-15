// const HomeNavbar = () => {
//   return (
//     <div className="header-menu mt-4">
//       <a className="menu-link is-active" href="#">

import { useSelector } from "react-redux";

//         All (10)
//       </a>
//       <a className="menu-link notify" href="#">
//         Active task (10)
//       </a>
//       <a className="menu-link" href="#">
//         Favorite (10)
//       </a>
//       <a className="menu-link notify" href="#">
//         Completed (10)
//       </a>
//     </div>
//   );
// };

// export default HomeNavbar;

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
