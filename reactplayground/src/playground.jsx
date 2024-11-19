import React, { useState } from 'react';

export default function Playground() {

    const [value, setValue] = useState(4);

    function decrement() {

        setValue(value - 1);

    }

    function increment() {

        setValue(value + 1);

    }


    return (

        <>
        
            <button onClick={decrement}>-</button>
            <h1>{value}</h1>
            <button onClick={increment}>+</button>

        </>

    )

}
