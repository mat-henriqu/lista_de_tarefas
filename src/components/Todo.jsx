import React from 'react'
import { toast } from 'react-toastify';

const Todo = ({ todo, removeTodo, completeTodo }) => {
    const notifySuccess = () => toast.success("Tarefa marcada como completa");
    const notifyUncomplete = () => toast.info("Tarefa marcada como incompleta");
    const notifyExcluded = () => toast.warn("Tarefa excluída com sucesso");

    const handleComplete = (id) => {
        completeTodo(id);
        if (todo.isCompleted) {
            notifyUncomplete();
        } else {
            notifySuccess();
        }
    }

    const handleRemove = (id) => {
        removeTodo(id);
        notifyExcluded();
    }

    return (
        <div className="todo">
            <div
                className="content"
                style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
                <p className='text'>{todo.text}</p>
                <p className='category'>({todo.category})</p>
            </div>
            <div>
                <button className='complete' onClick={() => handleComplete(todo.id)}>
                    {todo.isCompleted ? "Incompleta" : "Completa"}
                </button>
                <button className='remove' onClick={() => handleRemove(todo.id)}>
                    X
                </button>
            </div>
        </div>
    )
}

export default Todo;
