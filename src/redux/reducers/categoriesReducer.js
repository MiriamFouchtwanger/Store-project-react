import produce from 'immer'
import actions from '../actions'
import createReducer from '../reducerUtils'
//גלובלי state משתנה
const initiolState={
    Categories:[]
}
//פונקציות למשתנה הגלובלי
const CategoriesFunctions={
    setCategories(state,action){
        state.Categories=action.payload
    },
}

const reducer=produce((state,action)=>{
    createReducer(state,action,CategoriesFunctions)
},initiolState)

export default reducer