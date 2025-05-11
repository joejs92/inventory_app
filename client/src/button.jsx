function Button ({text, handleClick, id, items}){
    //const buttonStyle = {text: {text}}
    return (
        <button onClick = {()=>handleClick(id, items)} id={id}>{text}</button>
    )
}

export default Button