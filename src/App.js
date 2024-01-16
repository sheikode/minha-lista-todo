import React, { useState } from 'react';
import './App.css';  // Você pode remover isso se não estiver usando estilos

function App() {
  const tasks = ['Tarefa 1', 'Tarefa 2', 'Tarefa 3'];  // Adicione suas tarefas aqui
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  const handleNextTask = () => {
    setCurrentTaskIndex((prevIndex) => (prevIndex + 1) % tasks.length);
  };

  return (
    <div className="App">
      <h1>Minha Lista To-Do</h1>
      {tasks.length > 0 ? (
        <div>
          <p>Tarefa atual: {tasks[currentTaskIndex]}</p>
          <button onClick={handleNextTask}>Próxima Tarefa</button>
        </div>
      ) : (
        <p>Nenhuma tarefa disponível.</p>
      )}
    </div>
  );
}

export default App;

