import React, { Component } from 'react'
// import UserContext  from './components/userContext';
import ComponentF from './ComponentF';
class ComponentE extends Component {

        // ComponentE.contextType = userContext

    render() {
        return (
            <div>
                <h1>Component E --> child</h1>
                {/* <h1>Component E {this.context}</h1>  */}
                <ComponentF />
            </div>
        )
    }
}

export default ComponentE
