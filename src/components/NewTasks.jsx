import {useState} from 'react';
export default function NewTasks({onAdd}) {
  const [enteredTask, setEnteredTask] = useState('');

  function handelChange(event) {
    setEnteredTask(event.target.value);
  }

  function handelClick() {
    if (enteredTask.trim() === '') return
    onAdd(enteredTask);
    setEnteredTask('');
  }

  return  <div className="flex items-center gap-4">
    <input onChange={handelChange} value={enteredTask} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" placeholder="Enter Task" />
    <button className="text-stone-700 hover:text-stone-950" onClick={handelClick}>Add Task</button>
  </div>
}