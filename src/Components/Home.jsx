import React, {useEffect, useState} from 'react'
import "./Header.css"
import Task from "./Tasks.jsx"

const Home = () => {

    const [task, setTask] = useState(localStorage.getItem("task")?JSON.parse(localStorage.getItem("task")):[]);
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);

    const handler = (e) => {
        e.preventDefault();
        setTask([...task, { title, description }]);
        setTitle("");
        setDescription("");
    }

    const deleteTask = (index) => {
        const filtered = task.filter((val, i) => {
            return i !== index;
        });
        console.log(filtered);
        setTask(filtered);
    }

    useEffect(() => {
        localStorage.setItem("task", JSON.stringify(task));
    }, [task]);

    return <div  className='container'>
        <h1>What are your goals for today?</h1>
        <form onSubmit={handler}>
            <input type='text' placeholder='Title of Task' value={title} onChange={(e) => {
                setTitle(e.target.value);
            }}></input>
            <textarea placeholder='Task Description'
            value={description} onChange={(e) => {
                setDescription(e.target.value);
            }}>
            </textarea>
 
            <button>ADD TASK</button>
        </form>
        {task.map((item,index) => {
            return <Task key={index} title={item.title} description={item.description}
                index={index}
            deleteTask={deleteTask}/>;
        })}
    </div>;
};

export default Home;
