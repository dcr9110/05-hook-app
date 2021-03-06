import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import { useForm } from '../../Hooks/useForm';

import './styles.css'
import { TodoList } from './TodoList';

const init = () =>{
    
    return JSON.parse(localStorage.getItem('todos')) || [];
    /* return [{
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false,
    }]; */
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    const [ { description }, handleInputChange, reset] = useForm({
        description: ''
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [todos])

    const handleDelete = (todoId) =>{

        const action ={
            type: 'delete',
            payload: todoId
        }

        dispatch( action );
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if(description.trim().length <= 1){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch( action );
        reset();
    }

    const handleToggle = ( todoId ) =>{
        
        dispatch( {
            type: 'toggle',
            payload: todoId
        } );

    }

    return (
        <div>
            <h1>TodoApp ({ todos.length })</h1>
            <hr/>
            
            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>

                    <form onSubmit= { handleSubmit }>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Aprender..."
                            autoComplete="off"
                            value={ description }
                            onChange={ handleInputChange }
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
