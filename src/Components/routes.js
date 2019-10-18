import React from 'react'

import {Switch, Route} from 'react-router-dom'

// import components
import Dashboard from './Dashboard/Dashboard'
import Wizard from './Wizard/Wizard'


export default (
    <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/wizard" component={Wizard}/>
    </Switch>
)