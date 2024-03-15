import { FiCalendar } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import { useSelector } from "react-redux";

const LeftSidebar = ({ handleCreateTask, showAllTasks }) => {
  const todos = useSelector((store) => store.todos.items);
  return (
    <div className="left-side">
      <div className="side-wrapper">
        <div className="side-menu">
          <a
            className="cursor-pointer bg-pink-800 flex place-items-center gap-2"
            onClick={handleCreateTask}
          >
            New task <MdAdd size={25} />
          </a>
          <a className="cursor-pointer" onClick={showAllTasks}>
            <FiCalendar size={17.8} />
            Your Tasks
            {todos.length > 0 && (
              <span className="notification-number updates">
                {todos.length}
              </span>
            )}
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
