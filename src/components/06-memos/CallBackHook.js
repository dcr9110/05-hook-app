import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

import '../02-useEffect/effects.css';

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10);

    /* const increment = () =>{
        setCounter(counter + 1);
    } */

    const increment = useCallback((num = 1 ) => {
            setCounter(c => c + num);
        },
        [ setCounter ],
    )

    return (
        <div>
            <h1>useCallBack hook: { counter } </h1>
            <hr/>

            <ShowIncrement increment={ increment }/>
        </div>
    )
}
