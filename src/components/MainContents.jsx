import { useState } from "react";
import Editing from "./Editing";
import TaskList from "./TaskList";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LiaTelegramPlane } from "react-icons/lia";
import { CgMoreO } from "react-icons/cg";
import { LuUser2 } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";

const MainContents = ({ enableEditor, enableAllTasks }) => {
  const [isEditorTab, setIsEditorTab] = useState(false);
  const [isTaskAdded, setIsTaskAdded] = useState(false);

  const goToHomePage = () => {
    setIsTaskAdded(true);
  };

  const handleClick = () => {
    setIsEditorTab(true);
  };

  return (
    <main className="w-full h-auto pl-6 py-8">
      <nav className="flex items-center justify-between">
        <div className="flex items-center justify-center">
          <CiSearch
            size={22}
            className="relative right-[-2.2rem] text-gray-600 cursor-pointer"
          />
          <input
            type="text"
            placeholder="Search Tasks..."
            className="p-2 pl-11 w-96 rounded-md outline-none appearance-none"
          />
        </div>

        <main className="flex items-center gap-8">
          <div className="w-fit h-auto flex items-center justify-center">
            <a href="" className="relative inline-block text-lg group">
              <span className="relative z-10 block px-3 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative flex items-center justify-center gap-2">
                  <IoMdNotificationsOutline size={20} className="" />
                  <span>Notification</span>
                </span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </a>
          </div>

          <div className="w-fit h-auto flex items-center justify-center">
            <a href="" className="relative inline-block text-lg group">
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative flex items-center justify-center gap-2">
                  <LiaTelegramPlane size={18} />
                  <span>Share</span>
                </span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </a>
          </div>

          <div className="w-fit h-auto flex items-center justify-center">
            <a href="" className="relative inline-block text-lg group">
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative flex items-center justify-center gap-2">
                  <CgMoreO size={16} />
                  <span>More</span>
                </span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </a>
          </div>

          <div className="w-fit h-auto flex items-center justify-center">
            <a href="" className="relative inline-block text-lg group">
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative flex items-center justify-center gap-2">
                  <LuUser2 size={17} /> <span>User</span>
                </span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </a>
          </div>
        </main>
      </nav>
      <header className="grid gap-6 mt-8 border p-6">
        <div>Welcome back to your</div>
        <div>
          <h2>Daily task manager</h2>
        </div>
        <div>Start tracking</div>
      </header>
      <main>
        {isEditorTab || enableEditor ? (
          <Editing enableTaskAdded={goToHomePage} />
        ) : (
          <TaskList handleClick={handleClick} />
        )}
        {(isTaskAdded || enableAllTasks) && (
          <TaskList handleClick={handleClick} />
        )}
      </main>
    </main>
  );
};

export default MainContents;
