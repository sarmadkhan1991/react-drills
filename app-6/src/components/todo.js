import React from 'react';

export default function Todo (props) {
    const mappedTodos = props.taskList.map((task, index) => {
    return <h2 key={index}>{task}</h2>
    })
    return (
    <div>{mappedTodos}</div>
    )
}