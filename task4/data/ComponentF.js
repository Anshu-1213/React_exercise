import React, { Component } from 'react'
import {UserConsumer} from './userContext'
export class ComponentF extends Component {
    render() {
        return (
            <div>
            <h1>Component F  --> Grandchildren</h1>
           <UserConsumer>
                {
                    username => {
                        return <div> Hello {username}</div>
                    }
                }
           </UserConsumer>
           </div>
        )
    }
}

export default ComponentF
