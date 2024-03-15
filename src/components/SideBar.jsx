import AddIcon from "@mui/icons-material/Add";
import { RxDashboard } from "react-icons/rx";
import { FiCalendar } from "react-icons/fi";
import { TbNotes } from "react-icons/tb";
import { IoMailOutline, IoSettingsOutline } from "react-icons/io5";

const SideBar = ({ tab, allTasks }) => {
  return (
    <main className="w-[20%] p-8 bg-[#f0ffff] shadow">
      <div className="flex gap-2">
        <img
          src="/assets/programmer-with-his-dog-coding-the-universe.jpg"
          alt="Logo"
          className="w-[15%]"
        />
        <h3>TaskMatent</h3>
      </div>
      <div className="flex flex-col items-start justify-center gap-8 mt-10">
        <div
          onClick={tab}
          className="w-fit h-auto flex items-center justify-center cursor-pointer"
        >
          <a className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span className="flex items-center justify-center gap-1 relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Create Task <AddIcon />
            </span>
          </a>
        </div>

        <div className="secondary-btn">
          <RxDashboard size={17.5} />
          <span>Dashboard</span>
        </div>
        <div className="secondary-btn">
          <FiCalendar size={17.8} />
          <span>Your Task</span>
        </div>
        <div onClick={allTasks} className="secondary-btn">
          <TbNotes size={19.5} /> <span>Task List</span>
        </div>
        <div className="secondary-btn">
          <IoMailOutline size={18} />
          <span>Inbox</span>
        </div>
        <div className="secondary-btn">
          <IoSettingsOutline size={18.5} />
          <span>Settings</span>
        </div>
      </div>
    </main>
  );
};

export default SideBar;
