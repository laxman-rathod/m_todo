import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../todoSlice";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CreateTask = ({ showAllTasks }) => {
  const [date, setDate] = useState(new Date());
  const title = useRef(null);
  const desc = useRef(null);

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (title.current.value !== "") {
      dispatch(
        addTodo({
          id: Math.random().toString(36).substr(2, 9),
          title: title.current.value, //todoTitle
          desc: desc.current.value, //todoDesc
          dueDate: date.toDateString(),
        })
      );
      title.current.value = "";
      desc.current.value = "";
      showAllTasks();
    }
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="container-create-task">
      <div className="w-full grid gap-y-4">
        <input type="text" placeholder="Title" className="title" ref={title} />

        <textarea
          rows={15}
          placeholder="Start Typing"
          className="description"
          ref={desc}
        />

        <div className="">
          <h2>Select Date</h2>
          <Calendar onChange={handleDateChange} value={date} />
          <p>{date.toDateString()}</p>
        </div>

        <div
          onClick={handleAddTodo}
          className="w-full flex items-center justify-center cursor-pointer"
        >
          <div className="px-5 py-2.5 relative rounded group font-medium text-white inline-block">
            <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
            <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
            <span className="relative p-4">Add Todo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
