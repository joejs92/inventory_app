import {useState, useEffect} from 'react';
import Button from './button.jsx';
import ItemBox from './ItemBox';

function CategoryBox({itemList, name, id, addClick}){
    const [itemObject, setItemObject] = useState(itemList);

    const newId = `${id}Add`;
    
    function modalTest(id){
       const newItem = prompt("Enter new item");
       window.alert(newItem);
    }
    return(
        <div className='categoryBox' id = {id}>
            <div className='categoryHeader'>
                <div className='categoryName'>
                    <h2>{name}</h2>
                </div>
                <Button text = {"Add Item"} id = {newId} handleClick={addClick}/>
            </div>
            <div className='categoryContent'>
                <ul>
                    {itemObject.map((item)=>{
                        return(
                            <li key={item.id}>
                                <ItemBox id={item.id} name = {item.name} qty = {item.quantity}/>
                            </li>
                        )
                    })}
                </ul> 
            </div>
        </div>
    )
}
export default CategoryBox