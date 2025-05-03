import Button from './button.jsx'

function CategoryButton({text,handleClick,id}){
    const newId = `${id}Close`;
    //https://react.dev/learn/responding-to-events#stopping-propagation
    return(
        <>
        {id == 'all' || id == 'addCategory' ? (
            <div className='categoryBtn'>
            <div className='categoryBtnBody'>
                <p>{text}</p>
            </div>
            </div>
        ):(
            <div className='categoryBtn'>
            <div className='categoryBtnHeader'>
                <button onClick={e => {e.stopPropagation(); handleClick(newId)}}>X</button>
            </div>
            <div className='categoryBtnBody'>
                <p>{text}</p>
            </div>
            </div>
        )}
        
        </>
    )
} 
export default CategoryButton;