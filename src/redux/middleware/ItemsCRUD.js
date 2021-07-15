import actions from '../actions'
//כל המוצרים
export const getItemsByCategory=({dispatch,getState})=>next=>action=>{
    if(action.type === 'GET_ITEMS_BY_CATEGORY')
    {
        fetch(`http://localhost:4000/getProducstByCategory/${action.payload}`,
        {
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then(result=>
            { return dispatch(actions.setItems(result))})
        .catch(err=>console.log(err))
    }
    return next(action)
}