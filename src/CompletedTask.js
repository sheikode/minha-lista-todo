// CompletedTask.js
import React from 'react';

function CompletedTask({ task, onRemoveTask }) {
  return (
    <div>
      <p>Tarefa concluída: {task}</p>
      <button onClick={onRemoveTask}>Remover Tarefa</button>
    </div>
  );
}

export default CompletedTask;
