function convertActionNameToLowerCase(actionName) {
    return actionName.toLowerCase().replace(/_(\w)/g, v => v[1].toUpperCase())
}
export default function createReducer(state, action, handlers) {
    let key = convertActionNameToLowerCase(action.type)
    let handler = handlers[key]//תוכן הפונקציה
    if (handler)
        handler(state, action)
}