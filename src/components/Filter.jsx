import React from 'react'
import Search from './Search'

const Filter = ({ filter, setFilter, setSort }) => {
    return (
        <div className='filter'>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select
                        className='filter-options__select'
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todos</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">Incompletas</option>
                    </select>
                </div>
                <div>
                    <p>Ordem alfabética:</p>
                    <button
                        className='filter-options__button'
                        onClick={() => setSort("Asc")}
                    >
                        Asc
                    </button>
                    <button
                        className='filter-options__button'
                        onClick={() => setSort("Desc")}
                    >
                        Desc
                    </button>
                </div>
            </div>
        </div >
    )
}

export default Filter