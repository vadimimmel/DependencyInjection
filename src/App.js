import React, { useState } from "react";
import './App.css';

function useForceUpdate() {
  const [, setToggle] = useState(false);
  return () => setToggle(toggle => !toggle);
}

export const App = ({ controller, model }) => {
		const [newTask, setNewTask] = useState('');
		const forceUpdate = useForceUpdate();
		const tasks  = model.getTasks();

    const handleAddTask = () => {
        controller.addTask(newTask);
        setNewTask("");
    };

    const handleRemoveTask = (index) => {
        controller.removeTask(index);
				forceUpdate();
    };

    return (
        <div>
            <h1>Task List</h1>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
								className='input'
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className='li'>
                        {task}
                        <button onClick={() => handleRemoveTask(index)} className='button'>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
