import {applyMiddleware, combineReducers, createStore } from 'redux'
import Items from './reducers/ItemsReducer'
import Categories from './reducers/categoriesReducer'
import {getItemsByCategory} from './middleware/ItemsCRUD'
import {getAllCategories} from './middleware/categoriesCRUD'

const reducer = combineReducers({Items,Categories});
const store=createStore(reducer,applyMiddleware(getItemsByCategory,getAllCategories))
window.store=store
export default store