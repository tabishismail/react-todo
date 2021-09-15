import "./css/index.css"


function Input({type,placeholder,value,onChange}){
    return (
        <input onChange={onChange} value={value} className="input" type={type} placeholder={placeholder} />
    )
}
export default Input;