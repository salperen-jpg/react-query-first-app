import { useState } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import From from './components/From';
import Tasks from './components/Tasks';
import { nanoid } from 'nanoid';

const defaultItems = [
  { id: nanoid(), title: 'walk the dog', isDone: false },
  { id: nanoid(), title: 'wash dishes', isDone: false },
  { id: nanoid(), title: 'drink coffee', isDone: true },
  { id: nanoid(), title: 'take a nap', isDone: false },
];
function App() {
  const [items, setItems] = useState(defaultItems);
  return (
    <main>
      <div className='container'>
        <ToastContainer position='top-center' />
        <From />
        <Tasks />
      </div>
    </main>
  );
}

export default App;
