function Button ({text, handleClick}){
    //const buttonStyle = {text: {text}}
    return (
        <button onClick = {()=>handleClick()}>{text}</button>
    )
}

export default Button