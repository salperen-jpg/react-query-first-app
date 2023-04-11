import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import customFetch from './utils/customFetch';
import { toast } from 'react-toastify';

const From = () => {
  const [title, setTitle] = React.useState('');
  const queryClient = useQueryClient();
  const { mutate: createTask, isLoading } = useMutation({
    mutationFn: (task) => customFetch.post('/', { title: task }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      toast.success('task added');
      setTitle('');
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title);
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
        <button className='btn submit-btn' type='submit' onClick={handleSubmit}>
          Add
        </button>
      </div>
    </form>
  );
};

export default From;
