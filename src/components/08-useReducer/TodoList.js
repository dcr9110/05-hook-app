import React from 'react'
import { TodosListItem } from './TodosListItem'

export const TodoList = ( {todos, handleDelete, handleToggle} ) => {
    return (
        <>
            <ul className="list-group list-group-flush">
                        {
                            todos.map( (todo, i) =>(
                                <TodosListItem 
                                    todo={todo}
                                    handleDelete ={handleDelete}
                                    handleToggle={handleToggle}
                                    i={i} 
                                    />
                            ))
                        }
            </ul>
        </>
    )
}
