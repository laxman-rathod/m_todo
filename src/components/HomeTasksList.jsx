import TaskCards from "./TaskCards";

const HomeTasksList = ({ handleEditTodoTab, isTaskCompleted, todos }) => {
  return (
    <main className="mt-8">
      <div className="apps-card">
        <TaskCards
          handleEditTodoTab={handleEditTodoTab}
          isTaskCompleted={isTaskCompleted}
          todos={todos}
        />
      </div>
    </main>
  );
};

export default HomeTasksList;
