import React from 'react';

const Task = props => {

  const {username, email, text, status, image_path} = props.task;

  return (
      <div className={`task ${status ? 'task--done' : 'task--to-do'}`}>
        <h3 className="task__title">{username}</h3>
        <p className="task__title_email">{email}</p>
        <p className="task__description">{text}</p>
        <img className="task__img" src={image_path} alt="img"/>
      </div>
  )};
export default Task;
