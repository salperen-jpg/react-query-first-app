import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import customFetch from './utils/customFetch';
import { useDeleteTask, useEditTask } from '../reactQueryCustomHooks';

const Task = ({ id, title, isDone }) => {
  const { editTask } = useEditTask();
  const { deleteTask } = useDeleteTask();

  return (
    <article className='task'>
      <div>
        <input
          type='checkbox'
          checked={isDone}
          onChange={() => editTask({ id, isDone: !isDone })}
        />
        <p>{title}</p>
      </div>
      <button className='btn delete-btn' onClick={() => deleteTask(id)}>
        delete
      </button>
    </article>
  );
};

export default Task;
