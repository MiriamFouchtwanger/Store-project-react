import actions from '../actions'
//כל הקטגוריות
export const getAllCategories=({dispatch,getState})=>next=>action=>{
    if(action.type === 'GET_ALL_CATEGORIES')
    {
        fetch('http://localhost:4000/getAllCategories',
        {
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then(result=>dispatch(actions.setCategories(result)))
        .catch(err=>console.log(err))
    }
    return next(action)
}