// CompleteTaskPage.js
import React from 'react';

function CompleteTaskPage({ currentTask, onCompleteTask }) {
  return (
    <div>
      <h1>Marcar Tarefas Concluídas</h1>
      {currentTask && (
        <div>
          <p>Tarefa atual: {currentTask}</p>
          <button onClick={onCompleteTask}>Marcar Concluída</button>
        </div>
      )}
    </div>
  );
}

export default CompleteTaskPage;
