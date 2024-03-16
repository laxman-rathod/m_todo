import { FiCalendar } from "react-icons/fi";
import { MdAdd } from "react-icons/md";
import { useSelector } from "react-redux";

const LeftSidebar = ({ handleCreateTask, showAllTasks }) => {
  const todos = useSelector((store) => store.todos.items);
  return (
    <div className="left-side">
      <div className="side-wrapper">
        <div className="side-menu">
          <div
            className="w-full flex items-center justify-center cursor-pointer"
            onClick={handleCreateTask}
          >
            <div className="px-10 py-2.5 relative rounded group font-medium text-white inline-block  ">
              <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
              <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
              <span className="relative flex place-items-center gap-2">
                New task
                <MdAdd size={21} />
              </span>
            </div>
          </div>

          <button className="cursor-pointer" onClick={showAllTasks}>
            <span className="flex place-items-center gap-2">
              <FiCalendar size={17.8} />
              Your Tasks
            </span>
            {todos.length > 0 && (
              <span className="notification-number updates">
                {todos.length}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
