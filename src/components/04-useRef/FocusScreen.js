import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();
    
    const handleClick = ()=>{
        inputRef.current.select();
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>
            <input 
                ref={ inputRef }
                className="form-control"
                placeholder="Su nombre"
            />
            <div className="mt-2"></div>
            <button 
                className="btn btn-primary mt-1"
                onClick={ handleClick }
            >
                Focus
            </button>
        </div>
    )
}

