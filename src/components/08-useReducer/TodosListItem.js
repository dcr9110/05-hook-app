import React from 'react';
import PropTypes from 'prop-types';

export const TodosListItem = ({todo, handleDelete, handleToggle, i}) => {
    return (
        <>
            <li
                key={todo.id}
                className="list-group-item"
            >

                <p
                    className={`${todo.done && 'complete'}`}
                    onClick={() => handleToggle(todo.id)}
                >
                    {i + 1}. {todo.desc}
                </p>
                <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(todo.id)}
                >
                    Borrar
                </button>
            </li>
        </>
    )
}

TodosListItem.propTypes = {
    handleToggle:   PropTypes.func.isRequired
}