import { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import actions from '../redux/actions'
import ViewOneItem from './viewOneItem'

const mapStateToProps=(state)=>{
    return {items : state.Items.Items}
}
const mapDispatchToProps=(dispatch)=>{
    return {getItemsByCategory : (id)=>dispatch(actions.getItemsByCategory(id))}
}
export default connect(mapStateToProps,mapDispatchToProps)(ViewAllItemsOfCategory)
function ViewAllItemsOfCategory(props){
    const {idCategory}=useParams()
    const {items,getItemsByCategory}=props
    useEffect(()=>{
        getItemsByCategory(idCategory)
    },[])
    const render=()=>{
        return items.map(p=>{
            return <ViewOneItem item={p}/>
        })
    }
    return<>
        {render()}
    {/*ViewOneItem כאן יש לעבור על רשימת המוצרים ע"פ הקטגוריה הנבחרת ולהציג כל מוצר ע"י הקומפוננטה */}
    </>
}