import { useState, useEffect } from 'react'
import Button from './button.jsx';
//The items should each have a unique key. May need the UUID stuff for that.
function ItemBox ({id,name,qty, deleteClick, changeClick, category}){
    const itemObject = {id: id, name: name, quantity: qty, category: category}
    const items = [itemObject.id, itemObject.name, itemObject.quantity];
    //const [quant, setQuant] = useState({qty}); //for changing the quantity of the item.
    return(
        <div className='itemBox' id = {itemObject.id}>
            {items.map((item)=>{
                return(<p>{item}</p>)
            })}
            <Button text={"Change Quantity"} id={"changeQuant"} handleClick={changeClick} items = {itemObject}/>
            <Button text = {"X"} id = {itemObject.id} handleClick={deleteClick} />
        </div>
    )
};

export default ItemBox;