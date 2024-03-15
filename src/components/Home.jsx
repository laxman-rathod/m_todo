import { useState } from "react";
import MainContents from "./MainContents";
import SideBar from "./SideBar";

const Home = () => {
  const [isEditorTab, setIsEditorTab] = useState(false);
  const [isAllTasks, setIsAllTasks] = useState(false);

  const handleAllTasksTab = () => {
    setIsAllTasks(true);
  };

  const handleClick = () => {
    setIsEditorTab(true);
  };

  return (
    <main className="flex pr-20">
      <SideBar tab={handleClick} allTasks={handleAllTasksTab} />
      <MainContents enableEditor={isEditorTab} enableAllTasks={isAllTasks} />
    </main>
  );
};

export default Home;
