import React from 'react';
import Task from './Task';
import { useQuery } from '@tanstack/react-query';
import customFetch from './utils/customFetch';
import { useFetchTasks } from '../reactQueryCustomHooks';

const Tasks = () => {
  const { isLoading, data, isError } = useFetchTasks();

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
