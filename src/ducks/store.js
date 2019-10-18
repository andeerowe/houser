import {createStore} from 'redux'

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipCode: 0
}

const STEP_ONE = 'STEP_ONE'

// export function stepOne(){
//     return{
//         type: STEP_ONE,
//         payload:
//     }
// }

function reducer(state = initialState, action){
switch(action.type){
    default:
        return state
}
}

export default createStore(reducer)