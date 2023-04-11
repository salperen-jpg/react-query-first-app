import React from 'react';
import Task from './Task';
import { useQuery } from '@tanstack/react-query';
import customFetch from './utils/customFetch';

const Tasks = ({ items }) => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      const { data } = await customFetch.get('/');
      return data;
    },
  });

  if (isLoading) {
    return <div>loading</div>;
  }

  if (isError) {
    return <div>error...</div>;
  }

  return (
    <section className='tasks'>
      {data.taskList.map((item) => {
        return <Task key={item.id} {...item} />;
      })}
    </section>
  );
};

export default Tasks;
