import React from 'react';
import { useCounter } from '../../Hooks/useCounter';
import './counter.css';

export default function CounterWithCustomHook() {
    
    const {state, increment, decrement, reset} =  useCounter(24);
    
    return (
        <>
            <h1>Counter with Hook: {state}</h1>
            <hr/>
            <button className="btn btn-primary" onClick={()=>{increment(2)}}> +1 </button>
            <button className="btn btn-primary" onClick={reset}> reset </button>
            <button className="btn btn-primary" onClick={()=>{decrement(2)}}> -1 </button> 
        </>
    )
}
