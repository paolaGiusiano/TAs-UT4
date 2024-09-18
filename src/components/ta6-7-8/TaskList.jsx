import React, { useState } from 'react';
import './TaskList.css'; // (Opcional) para estilos específicos del componente

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask(''); // Limpiar el input
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setEditIndex(index);
    setEditTask(tasks[index]);
  };

  const handleSaveEdit = (event) => {
    event.preventDefault();
    const updatedTasks = tasks.map((task, index) => 
      index === editIndex ? editTask : task
    );
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditTask('');
  };

  return (
    <div className="task-list">
      <h1>Lista de Tareas</h1>
      <form onSubmit={editIndex === null ? handleAddTask : handleSaveEdit}>
        <input
          type="text"
          value={editIndex === null ? newTask : editTask}
          onChange={editIndex === null ? handleInputChange : (e) => setEditTask(e.target.value)}
          placeholder="Ingrese una tarea"
        />
        <button type="submit">{editIndex === null ? 'Agregar Tarea' : 'Guardar Cambios'}</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button className="edit-button" onClick={() => handleEditTask(index)}>
              Editar
            </button>
            <button className="delete-button" onClick={() => handleDeleteTask(index)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
