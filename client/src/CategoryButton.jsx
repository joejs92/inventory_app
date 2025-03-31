import Button from './button.jsx'

function CategoryButton({text,handleClick,id}){
    return(
        <div className='categoryBtn'>
            <div className='categoryBtnHeader'>
                <button onClick={()=>handleClick(id)}>X</button>
            </div>
            <div className='categoryBtnBody'>
                <p>{text}</p>
            </div>
        </div>
    )
}
export default CategoryButton;