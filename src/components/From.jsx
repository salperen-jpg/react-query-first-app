import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import customFetch from './utils/customFetch';
import { toast } from 'react-toastify';
import { useCreateTask } from '../reactQueryCustomHooks';

const From = () => {
  const [title, setTitle] = React.useState('');

  const { createTask, isLoading } = useCreateTask();

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, {
      onSuccess: () => {
        setTitle('');
      },
    });
  };

  return (
    <form className='form'>
      <h2>Grocery Bud</h2>
      <div className='control'>
        <input
          type='text'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button
          className='btn submit-btn'
          type='submit'
          onClick={handleSubmit}
          disabled={isLoading}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default From;
