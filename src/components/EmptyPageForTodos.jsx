import { MdAdd } from "react-icons/md";

const EmptyPageForTodos = ({ handleCreateTask }) => {
  return (
    <div className="container-empty-page" onClick={handleCreateTask}>
      <MdAdd />
      <h1>Create a Task..</h1>
    </div>
  );
};

export default EmptyPageForTodos;
