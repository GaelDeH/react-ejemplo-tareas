import { useState, useContext} from "react";
import {TaskContext} from '../context/TaskContext'

function TasksForm() {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const {createTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, descripcion });
    setTitle("");
    setDescripcion("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form className="bg-gray-800 p-10 mb-4" onSubmit={handleSubmit}>
        <input className="bg-slate-300 p-3 rounded-md w-full mb-3"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus required
        />
        <textarea
        className="bg-slate-300 p-3 rounded-md w-full mb-3"
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => {
            setDescripcion(e.target.value);
          }}
          value={descripcion}
        ></textarea>
        <button className="bg-green-600 w-full p-3 rounded-md font-mono font-semibold text-xl hover:bg-green-500 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TasksForm;
