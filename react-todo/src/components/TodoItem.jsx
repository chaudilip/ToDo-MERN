import React from 'react'

function TodoItem({title,description,isCompleted,updateHandler,deleteHandler,id}) {
  return (
    <div className='todo'>
        <div>
    <h4>{title}</h4>
    <p>{description}</p>
        </div>
        <div>
            <input type='checkbox' onChange={()=>updateHandler(id)} checked={isCompleted} />
            <button className='btn' onClick={()=>deleteHandler(id)}>Delete</button>
        </div>
    </div>
  )
}

export default TodoItem