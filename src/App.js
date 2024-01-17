// App.js
import React, { useState } from 'react';
import './App.css';
import AddTaskPage from './AddTaskPage';
import CompleteTaskPage from './CompleteTaskPage';

function App() {
  const [currentPage, setCurrentPage] = useState('addTask');
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleCompleteTask = () => {
    const completedTask = tasks[currentTaskIndex];
    setCompletedTasks([...completedTasks, completedTask]);
    setTasks(tasks.filter((_, index) => index !== currentTaskIndex));
    setCurrentTaskIndex(0);

    if (tasks.length === 1) {
      setCurrentPage('showCompletedTasks');
    }
  };

  return (
    <div className="App">
      {currentPage === 'addTask' && (
        <AddTaskPage onAddTask={handleAddTask} />
      )}

      {currentPage === 'completeTask' && (
        <CompleteTaskPage
          currentTask={tasks[currentTaskIndex]}
          onCompleteTask={handleCompleteTask}
        />
      )}

      {currentPage === 'showCompletedTasks' && (
        <div>
          <h1>Todas as Tarefas Concluídas</h1>
          <ul>
            {completedTasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
          <button onClick={() => setCurrentPage('addTask')}>Voltar para Adicionar Tarefa</button>
        </div>
      )}

      {currentPage === 'addTask' && (
        <div>
          <button onClick={() => setCurrentPage('completeTask')}>Marcar Concluídas</button>
        </div>
      )}

      {currentPage === 'completeTask' && (
        <div>
          <button onClick={() => setCurrentPage('addTask')}>Adicionar Tarefa</button>
          <button onClick={handleCompleteTask}>Marcar Concluída</button>
        </div>
      )}
    </div>
  );
}

export default App;
