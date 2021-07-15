import {applyMiddleware, combineReducers, createStore } from 'redux'


const reducer = combineReducers();
const store=createStore(reducer,applyMiddleware())
window.store=store
export default store