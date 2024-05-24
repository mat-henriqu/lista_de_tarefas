import React from 'react'

const Search = ({ search, setSearch }) => {
    return (
        <div className='search'>
            <label className='search__label'>Pesquisar:</label>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Pesquisar tarefa...'
                className='search__input'
            />
        </div>
    )
}

export default Search