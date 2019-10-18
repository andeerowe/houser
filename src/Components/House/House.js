import React, {Component} from 'react'

class House extends Component {
    constructor(){
        super()

        this.state = {}
    }

    render(){
        return(
            <div>
                Property Name:{this.props.currentHouse.name}
                <br/>
                Address: {this.props.currentHouse.address}
                <br/>
                City: {this.props.currentHouse.city}
                <br/>
                State: {this.props.currentHouse.state}
                <br/>
                Zip: {this.props.currentHouse.zipCode}
                <br/>
                <button onClick={() => this.props.deleteMe(this.props.currentHouse.id)}>Delete</button>
            </div>
        )
    }
}

export default House