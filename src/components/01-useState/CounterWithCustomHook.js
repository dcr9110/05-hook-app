import React from 'react';
import { useCounter } from '../../Hooks/useCounter';
import './counter.css';

export default function CounterWithCustomHook() {
    
    const {state, increment, decrement, reset} =  useCounter(50);
    const classBtn = "btn btn-primary";

    return (
        <>
            <h1>Counter with Hook: {state}</h1>
            <hr/>
            <button className={classBtn} onClick={()=>{increment(2)}}> +1 </button>
            <button className={classBtn} onClick={reset}> reset </button>
            <button className={classBtn} onClick={()=>{decrement(2)}}> -1 </button> 
        </>
    )
}
