import ContentWrapperHerad from "./ContentWrapperHead";
import CreateTask from "./CreateTask";
import EditTodo from "./EditTodo";
import EmptyPageForTodos from "./EmptyPageForTodos";
import Header from "./Header";
import HomeNavbar from "./HomeNavbar";
import HomeTasksList from "./HomeTasksList";
import LeftSidebar from "./LeftSidebar";
import { useState } from "react";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const todos = useSelector((store) => store.todos.items);
  const favoriteTodos = todos.filter((todo) => todo.isFavorite);

  const [isCreateTask, setIsCreateTask] = useState(false);
  const [isTaskListHome, setIsTaskListHome] = useState(false);
  const [isEditTab, setIsEditTab] = useState(false);
  const [editTodo, setEditTodo] = useState();
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);
  const [isFavoriteTabActive, setIsFavoriteTabActive] = useState(false);

  const handleTabChange = (isFavorite) => {
    setIsFavoriteTabActive(isFavorite);
  };

  const handleCreateTask = () => {
    setIsCreateTask(true);
    setIsTaskListHome(false);
    setIsEditTab(false);
  };

  const handleTaskListHome = () => {
    setIsTaskListHome(true);
    setIsCreateTask(false);
    setIsEditTab(false);
  };

  const handleEditTodoTab = (todo) => {
    setEditTodo(todo); // Store the selected todo item
    setIsEditTab(true);
    setIsTaskListHome(false);
    setIsCreateTask(false);
  };

  const taskCompleted = () => {
    setIsTaskCompleted(true);
  };

  return (
    <div className="app">
      <Header />
      <div className="wrapper">
        <LeftSidebar
          handleCreateTask={handleCreateTask}
          showAllTasks={handleTaskListHome}
        />
        <div className="main-container">
          <div className="content-wrapper">
            {isCreateTask !== true && <ContentWrapperHerad />}
            {todos.length < 1 && isCreateTask !== true && (
              <EmptyPageForTodos handleCreateTask={handleCreateTask} />
            )}
            {isCreateTask && <CreateTask showAllTasks={handleTaskListHome} />}

            {todos.length > 0 && isTaskListHome && (
              <HomeNavbar
                handleTabChange={handleTabChange}
                isFavoriteTabActive={isFavoriteTabActive}
                favoriteTodos={favoriteTodos}
              />
            )}

            {todos.length > 0 && isTaskListHome && (
              <HomeTasksList
                handleEditTodoTab={handleEditTodoTab}
                todos={isFavoriteTabActive ? favoriteTodos : todos}
                isTaskCompleted={isTaskCompleted}
              />
            )}
            {isEditTab && (
              <EditTodo
                editTodo={editTodo}
                showAllTasks={handleTaskListHome}
                taskCompleted={taskCompleted}
              />
            )}
          </div>
        </div>
      </div>
      <div className="overlay-app"></div>
    </div>
  );
};

export default MainContainer;
