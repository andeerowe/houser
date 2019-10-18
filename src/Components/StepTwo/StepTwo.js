import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class StepTwo extends Component{
    constructor(){
        super()

        this.state = {
            url: ''
        }
    }

    handleUrlChange = (newValue) => {
        this.setState({
            url: newValue
        })
        console.log(this.state.url)
       }

    render(){
        return(
            <div>
                STEP TWO
                <div className="inputsContainer">
                    <label>Image URL</label>
                    <input placeholder={this.state.url} onChange={e => this.handleUrlChange(e.target.value)}></input>
                    <br/>
                    
                    {/* <button onClick={this.complete}> Complete </button> */}
                    <Link to="/wizard/step1">
                        <button>Previous Step</button>
                    </Link>
                    <Link to="/wizard/step3">
                        <button>Next Step</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default StepTwo