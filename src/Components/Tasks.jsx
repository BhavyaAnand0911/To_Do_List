//import React, { useState } from 'react'
import "./Header.css"

const Task = ({ title ,description,index,deleteTask}) => {

    
    return <div className='tasks'>
        <div>
            <p>{title}</p>
            <span>{description}</span>
        </div>
        <button onClick={() => {
            deleteTask(index) // to avoid getting called automatically as we are passing the parameter
        }}> - </button>
    </div>
};

export default Task;
