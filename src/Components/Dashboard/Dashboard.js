import React, {Component} from 'react'
import House from '../House/House'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './dashboard.css'

class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            houses: []
        }
    }

    componentDidMount (){

        axios.get('/api/houses').then(
            res => 
            this.setState({
                houses: res.data
            })
        
        // console.log('hello')
        )
        .catch(err => console.log('goodbye', err))
    }
    showHouses = () => {
        // console.log('fired')
        axios.get('/api/houses').then(
            res => 
            this.setState({
                houses: res.data
            })
        
        )
        .catch(err => console.log('goodbye', err))
    }

    deleteHouse = (id) => {
        console.log(id)
        axios.delete(`/api/houses/${id}`).then(res =>
            this.showHouses()
        ).catch(err => console.log(err))
    }

    render(){
        let {houses} = this.state
        return(
            <div className="dash_div">
                <div className="top-part">
                <h2>Dashboard</h2>
                <Link to="/wizard/step1">
                    <button id="add-new">Add New Property</button>
                </Link>
                </div>
                ______________________________________________________
                <div className="housesHolder">
                    <h3>Home Listings</h3>
                    {houses.map((element, index) => {
                        return <House 
                            currentHouse={element} 
                            key={index}
                            id={index}
                            deleteMe={this.deleteHouse}
                            />
                    })}
                </div>

            
            </div>
        )
    }
}

export default Dashboard