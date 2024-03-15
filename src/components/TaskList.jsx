import EditNoteIcon from "@mui/icons-material/EditNote";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { MdTaskAlt } from "react-icons/md";
import {
  FcHighPriority,
  FcLowPriority,
  FcMediumPriority,
} from "react-icons/fc";
// import myTasks from "../TaskData";
const TaskList = ({ handleClick }) => {

  const myTasks = [
    {
      title: "Nextjs tutorial",
      desc: "Today should be the first complete nextjs tutorial.",
      dateTime: Date.now(),
      priority: <FcHighPriority size={18} />, //High priority
      dueDate: Date.now(),
      favorite: <StarOutlineIcon fontSize="inherit" />,
      progress: <MdTaskAlt size={16} />,
      edit: <EditNoteIcon fontSize="small" />,
      // See more icon import { CgMoreO } from "react-icons/cg";
      delete: <DeleteOutlineIcon fontSize="inherit" />,
      tags: "#nextjs #coding #career",
    },
    {
      title: "Nextjs tutorial",
      desc: "Today should be the first complete nextjs tutorial.",
      dateTime: Date.now(),
      priority: <FcMediumPriority size={18} />, //High priority
      dueDate: Date.now(),
      favorite: <StarOutlineIcon fontSize="inherit" />,
      progress: <MdTaskAlt size={16} />,
      edit: <EditNoteIcon fontSize="small" />,
      // See more icon import { CgMoreO } from "react-icons/cg";
      delete: <DeleteOutlineIcon fontSize="inherit" />,
      tags: "#nextjs #coding #career",
    },
    {
      title: "Nextjs tutorial",
      desc: "Today should be the first complete nextjs tutorial.",
      dateTime: Date.now(),
      priority: <FcLowPriority size={18} />, //High priority
      dueDate: Date.now(),
      favorite: <StarOutlineIcon fontSize="inherit" />,
      progress: <MdTaskAlt size={16} />,
      edit: <EditNoteIcon fontSize="small" />,
      // See more icon import { CgMoreO } from "react-icons/cg";
      delete: <DeleteOutlineIcon fontSize="inherit" />,
      tags: "#nextjs #coding #career",
    },
    {
      title: "Nextjs tutorial",
      desc: "Today should be the first complete nextjs tutorial.",
      dateTime: Date.now(),
      priority: <FcLowPriority size={18} />, //High priority
      dueDate: Date.now(),
      favorite: <StarOutlineIcon fontSize="inherit" />,
      progress: <MdTaskAlt size={16} />,
      edit: <EditNoteIcon fontSize="small" />,
      // See more icon import { CgMoreO } from "react-icons/cg";
      delete: <DeleteOutlineIcon fontSize="inherit" />,
      tags: "#nextjs #coding #career",
    },
  ];
  
  return (
    <>
      <nav className="flex items-center justify-start gap-6 pb-2 pl-4 mt-8 border-black border-b">
        <button>All (10)</button>
        <button>Active task (10)</button>
        <button>Favorite (10)</button>
        <button>Completed (10)</button>
      </nav>
      <section className="grid grid-cols-3 mt-6 gap-x-4 gap-y-5">
        {myTasks.map((tasks, id) => (
          <div
            className="grid gap-3 p-4 w-full h-auto rounded-sm border"
            key={id + Date.now()}
          >
            <div className="flex justify-between">
              <button className="flex items-center justify-center gap-2">
                {tasks.priority}High
              </button>
              <div className="flex gap-2">
                <button onClick={handleClick}>{tasks.edit}</button>
                <button>{tasks.favorite}</button>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <h2>{tasks.title} </h2>
              <p> {tasks.desc} </p>
              <button>{tasks.dueDate} </button>
            </div>
            <div className="flex justify-between">
              <button>{tasks.tags}</button>

              <div className="flex gap-2">
                <button>{tasks.progress}</button>
                <button>{tasks.delete}</button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default TaskList;
