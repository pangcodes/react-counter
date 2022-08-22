import React from "react";

class ClassCounter extends React.Component {

    constructor() {
        super();
        this.state = {
            counter: 0
        }

        this.decrease = this.decrease.bind(this);
    }

    increase = () => {

        // https://reactjs.org/docs/state-and-lifecycle.html
        // This is wrong, do not pass in an object because
        // You should not rely on the values for 
        // calculating the next state
        // this.setState({
        //     counter: this.state.counter + 1
        // });

        // Instead, pass in a function 
        // The function takes in prevState
        // So use that to calculate the next state
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));

        // Rewriting it using regular function instead of arrow
        // this.setState(function(prevState) {
        //     return {
        //         counter: prevState.counter + 1
        //     };
        // });

    }

    decrease() {
        this.setState((prevState) => ({
            counter: prevState.counter - 1
        }));
    }

    reset = () => {
        this.setState(() => ({
            counter: 0
        }));
    }

    render() {
        return (
            <div>
                <h1>My Counter</h1>

                <button onClick={this.increase}>Increase</button>
                <h1>{this.state.counter}</h1>
                {/* <button onClick={() => this.decrease()}>Decrease</button> */}

                <button onClick={this.decrease}>Decrease</button>

                <br></br>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

export default ClassCounter;