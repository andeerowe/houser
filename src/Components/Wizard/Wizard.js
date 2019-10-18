import React, {Component} from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'
import {Route} from 'react-router-dom'
import StepOne from '../StepOne/StepOne'
import StepTwo from '../StepTwo/StepTwo'
import StepThree from '../StepThree/StepThree'

class Wizard extends Component {
    constructor(){
        super()

        this.state = {
            
        }
    }

    render(){
        console.log(this.props.history)
        return(
            <section className="wizardForm">
                <h3>Add New Listing</h3>
                <Link to="/">
                    <button>Cancel</button>
                </Link>
                <Route exact path="/wizard/step1" component={StepOne}/>
                <Route exact path="/wizard/step2" component={StepTwo}/>
                <Route exact path="/wizard/step3" component={StepThree}/>
                
            </section>
        )
    }
}

export default Wizard