import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Wizard extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipCode: 0
        }
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

    complete = () => {
        axios.post('/api/houses', {
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zipCode: this.state.zipCode
        }).then(
            this.props.history.goBack(),
            this.setState({
                name: '',
                address: '',
                city: '',
                state: '',
                zipCode: 0
            })

            
        )
        .catch(err => console.log(err))
    }

    render(){
        console.log(this.props.history)
        return(
            <section className="wizardForm">
                Wizard
                <Link to="/">
                    <button>Cancel</button>
                </Link>
                <div className="inputsContainer">
                    <input placeholder={this.state.name} onChange={e => this.handleNameChange(e.target.value)}></input>
                    <input placeholder={this.state.address} onChange={e => this.handleAddressChange(e.target.value)}></input>
                    <input placeholder={this.state.city} onChange={e => this.handleCityChange(e.target.value)}></input>
                    <input placeholder={this.state.state} onChange={e => this.handleStateChange(e.target.value)}></input>
                    <input placeholder={this.state.zipCode} onChange={e => this.handleZipCodeChange(e.target.value)}></input>
                    <button onClick={this.complete}> Complete </button>
                </div>
            </section>
        )
    }
}

export default Wizard