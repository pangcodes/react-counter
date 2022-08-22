import { useState } from 'react';

function Counter(props) {
    const [counter, setCounter] = useState(0);
    //let counter = 0;

    const increase = () => {
        //counter += 1;
        setCounter(count => count + 1);
    }

    const decrease = () => {
        setCounter(count => count - 1);
    }

    const reset = () => {
        setCounter(0);
    }

    const customStyle = () => ({
        color: "red",
        fontSize: (() => Math.random() * 100)(),
        border: "1px solid black"
    }
    )

    return (
        <div>
            <h1 style={customStyle()}>
                {props.title}
            </h1>

            <button style={customStyle()} onClick={increase}>Increase</button>
            <h1>{counter}</h1>
            <button style={customStyle()} onClick={decrease}>Decrease</button>
            <br></br>
            <button style={customStyle()} onClick={reset}>Reset</button>

        </div>
    );
}

export default Counter;