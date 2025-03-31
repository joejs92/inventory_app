import {useState, useEffect} from 'react';
import Button from './button.jsx';
//still need to add the delete button.
function ItemBox ({id,name,image,qty}){
    const items = [id, name, qty]
    const [quant, setQuant] = useState({qty}); //for changing the quantity of the item.
    return(
        <div className='itemBox' id = {id}>
            {items.map((item)=>{
                return(<p key = {index}></p>)
            })}
        </div>
    )
};

export default ItemBox;