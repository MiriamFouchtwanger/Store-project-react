import produce from 'immer'
import actions from '../actions'
import createReducer from '../reducerUtils'
//גלובלי state משתנה
const initiolState={
    Items:[]
}
//פונקציות למשתנה הגלובלי
const ItemsFunctions={
    setItems(state,action){
        state.Items=action.payload
    },
}

const reducer=produce((state,action)=>{
    createReducer(state,action,ItemsFunctions)
},initiolState)

export default reducer