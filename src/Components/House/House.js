import React, {Component} from 'react'

class House extends Component {
    constructor(){
        super()

        this.state = {}
    }

    render(){
        return(
            <div>
                {this.props.currentHouse.name}
                <button>Delete</button>
            </div>
        )
    }
}

export default House