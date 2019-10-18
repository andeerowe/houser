import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class StepThree extends Component{
    constructor(){
        super()

        this.state = {
            mortgage: 0,
            rent: 0
        }
    }

    handleMortgageChange = (newValue) => {
        this.setState({
            mortgage: newValue
        })
        console.log(this.state.url)
       }

       handleRentChange = (newValue) => {
        this.setState({
            rent: newValue
        })
        console.log(this.state.url)
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
        return(
            <div>
                STEP THREE
                <p>Recommended Rent: $0</p>
                <div className="inputsContainer">
                    <label>Monthly Mortgage Amount</label>
                    <input placeholder={this.state.mortgage} onChange={e => this.handleMortgageChange(e.target.value)}></input>
                    <br/>
                    <label>Desired Monthly Rent</label>
                    <input placeholder={this.state.rent} onChange={e => this.handleRentChange(e.target.value)}></input>
                    <br/>
                    <Link to="/wizard/step2">
                        <button>Previous Step</button>
                    </Link>
                    <button onClick={this.complete}> Complete </button>
                </div>
            </div>
        )
    }
}

export default StepThree