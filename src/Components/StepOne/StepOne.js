import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store from '../../ducks/store'

class StepOne extends Component{
    constructor(){
        super()

        this.reduxState = store.getState()

        this.state = {
            name: this.reduxState.name,
            address: this.reduxState.address,
            city: this.reduxState.city,
            state: this.reduxState.state,
            zipCode: this.reduxState.zipCode
        }

        
    }
    componentDidMount(){
        store.subscribe(() => {})
        this.setState({
                name: this.reduxState.name,
                address: this.reduxState.address,
                city: this.reduxState.city,
                state: this.reduxState.state,
                zipCode: this.reduxState.zipCode
        })
    }

    handleNameChange = (newValue) => {
        this.setState({
            name: newValue
        })
        console.log(this.state.name)
    }
    handleAddressChange = (newValue) => {
        this.setState({
            address: newValue
        })
        console.log(this.state.address)
    }
    handleCityChange = (newValue) => {
        this.setState({
            city: newValue
        })
        console.log(this.state.city)
    }
    handleStateChange = (newValue) => {
        this.setState({
            state: newValue
        })
        console.log(this.state.state)
    }
    handleZipCodeChange = (newValue) => {
        this.setState({
            zipCode: newValue
        })
        console.log(this.zipCode)
    }

    render(){
        return(
            <div>
                STEP ONE
                <div className="inputsContainer">
                    <label>Property Name</label>
                    <input placeholder={this.state.name} onChange={e => this.handleNameChange(e.target.value)}></input>
                    <br/>
                    <label>Address</label>
                    <input placeholder={this.state.address} onChange={e => this.handleAddressChange(e.target.value)}></input>
                    <br/>
                    <label> City </label>
                    <input placeholder={this.state.city} onChange={e => this.handleCityChange(e.target.value)}></input>
                    <label>State(2 letters)</label>
                    <input placeholder={this.state.state} onChange={e => this.handleStateChange(e.target.value)}></input>
                    <br/>
                    <label>ZipCode</label>
                    <input placeholder={this.state.zipCode} onChange={e => this.handleZipCodeChange(e.target.value)}></input>
                    
                    {/* <button onClick={this.complete}> Complete </button> */}
                </div>
                <Link to="/wizard/step2">
                    <button>Next Step</button>
                </Link>
            </div>
        )
    }
}

export default StepOne