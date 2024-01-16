// AddTaskForm.js
import React, { useState } from 'react';

function AddTaskForm({ onAddTask }) {
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      onAddTask(newTask);
      setNewTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nova Tarefa:
        <input type="text" value={newTask} onChange={handleInputChange} />
      </label>
      <button type="submit">Adicionar Tarefa</button>
    </form>
  );
}

export default AddTaskForm;
