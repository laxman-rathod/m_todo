import { MdDelete, MdTaskAlt } from "react-icons/md";
import { removeTodo, toggleFavorite } from "../todoSlice";
import { useDispatch } from "react-redux";
import { FiEdit } from "react-icons/fi";

const TaskCards = ({ handleEditTodoTab, isTaskCompleted, todos }) => {
  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id));
  };

  return (
    <>
      {todos.length > 0 &&
        todos.map((items) => {
          return (
            <div key={items.id} className="app-card">
              <div key={items.id} className="flex items-center justify-between">
                <div className="flex place-items-center">{items.title}</div>
                {isTaskCompleted && !items.id && (
                  <MdTaskAlt size={16} className="text-green-500 font-bold" />
                )}
              </div>
              <div key={items.id} className="app-card__subtext">
                {items.desc}
              </div>
              <div
                key={items.id}
                className="flex items-center justify-between pt-5"
              >
                <span className="text-xs">{items.dueDate}</span>
                <div
                  key={items.id}
                  className="flex items-center justify-center gap-2"
                >
                  {items.isFavorite ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="gold"
                      className="w-6 h-6"
                    >
                      <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      onClick={() => handleToggleFavorite(items.id)}
                      fill="white"
                      className="w-6 h-6"
                    >
                      <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  )}
                  <button onClick={() => handleEditTodoTab(items)}>
                    <FiEdit />
                  </button>
                  <button onClick={() => handleRemoveTodo(items.id)}>
                    <MdDelete size={18} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default TaskCards;
