import {useState, useEffect} from 'react';
import Button from './button.jsx';
//still need to add the delete button.
//The items should each have a unique key. May need the UUID stuff for that.
function ItemBox ({id,name,qty}){
    const items = [id, name, qty]
    const [quant, setQuant] = useState({qty}); //for changing the quantity of the item.
    return(
        <div className='itemBox' id = {id}>
            {items.map((item)=>{
                return(<p>{item}</p>)
            })}
        </div>
    )
};

export default ItemBox;