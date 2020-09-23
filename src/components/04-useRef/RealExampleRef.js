import React, { useState } from 'react';
import '../02-useEffect/effects.css';
import { MultipleCustemHooks } from '../03-examples/MultipleCustemHooks';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Real example ref</h1>
            <hr/>
            {show && <MultipleCustemHooks/>}
            <hr/>
            <button
                className="btn btn-primary"
                onClick={() =>{
                    setShow(!show);
                }}
            >
                Show/Hide
            </button>

        </div>
    )
}
