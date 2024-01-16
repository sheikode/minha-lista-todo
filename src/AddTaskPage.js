// AddTaskPage.js
import React, { useState } from 'react';

function AddTaskPage({ onAddTask }) {
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
    <div>
      <h1>Adicionar Tarefas</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nova Tarefa:
          <input type="text" value={newTask} onChange={handleInputChange} />
        </label>
        <button type="submit">Adicionar Tarefa</button>
      </form>
    </div>
  );
}

export default AddTaskPage;
