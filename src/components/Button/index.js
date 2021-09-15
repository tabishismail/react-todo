import "./css/index.css"
let Button=(props)=>{
    let {myClass,onClick,children}=props;
return(
<button className={myClass} onClick={onClick}>{children}</button>

)
}

export default Button;