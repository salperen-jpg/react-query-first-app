import React from 'react';

const Task = ({ id, title, isDone }) => {
  return (
    <article className='task'>
      <div>
        <input
          type='checkbox'
          checked={isDone}
          onChange={() => console.log('edit')}
        />
        <p>{title}</p>
      </div>
      <button
        className='btn delete-btn'
        onClick={() => console.log('will delete')}
      >
        delete
      </button>
    </article>
  );
};

export default Task;
