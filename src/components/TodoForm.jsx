import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return;
        addTodo(value, category)
        setValue('');
        setCategory('');
    }

    return (
        <div className='todo-form'>
            <h2>Criar Tarefa:</h2>
            <form onSubmit={handleSubmit} className='todo-form__form'>
                <input
                    type="text"
                    placeholder='Adicione a tarefa'
                    className='input-select todo-form__input'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <select
                    className='input-select todo-form__select'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type='submit' className='todo-form__button'>Criar</button>
            </form>
        </div>
    )
}

export default TodoForm