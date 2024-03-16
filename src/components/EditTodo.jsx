import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodos } from "../todoSlice";

const EditTodo = ({ editTodo, showAllTasks, taskCompleted }) => {
  const [title, setTitle] = useState(editTodo.title);
  const [desc, setDesc] = useState(editTodo.desc);
  const [dueDate, setDueDate] = useState(editTodo.dueDate);
  const dispatch = useDispatch();

  const handleEditTodo = () => {
    if (editTodo && editTodo.id) {
      dispatch(
        editTodos({
          id: editTodo.id,
          newTodo: {
            title,
            desc,
            dueDate,
          },
        })
      );
      setTitle("");
      setDesc("");
      setDueDate("");
    }
    showAllTasks();
  };

  const handleCancelEdit = () => {
    setTitle("");
    setDesc("");
    setDueDate("");
    showAllTasks();
  };

  return (
    <div className="container-create-task">
      <div className="w-full grid gap-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="title"
        />

        <textarea
          rows={15}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Start Typing"
          className="description"
        />

        <input
          type="text"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          placeholder="Enter a date"
          className="title"
        />
        <div className="flex place-items-center gap-2 text-sm w-fit">
          <input
            type="checkbox"
            id="done"
            className="cursor-pointer"
            onClick={taskCompleted}
          />
          <label htmlFor="done" className="cursor-pointer">
            Mark as done!
          </label>
        </div>

        <div className="flex items-center justify-center gap-8">
          <button class="btn-12" onClick={() => handleEditTodo()}>
            <span>Click!</span>
            <span>Save</span>
          </button>

          <button className="btn-12" onClick={handleCancelEdit}>
            <span>Click!</span>
            <span>Cancel</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
