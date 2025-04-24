function Button ({text, handleClick, id}){
    //const buttonStyle = {text: {text}}
    return (
        <button onClick = {()=>handleClick()} id={id}>{text}</button>
    )
}

export default Button