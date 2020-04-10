import React, { Component } from 'react';
import ChildA1 from './ChildA1';

class A1 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }

    onClickCounter = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1,

        }));
    }
    render() {
        // console.log(this.state.counter);
        return (
            <div>
                <button onClick={this.onClickCounter}>Counter</button>
                <ChildA1 count = {this.state.counter} />
            </div>
        )
    }
}
export default A1;