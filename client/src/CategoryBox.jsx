import {useState, useEffect} from 'react';
import Button from './button.jsx';
import ItemBox from './ItemBox';
import axios from 'axios';

function CategoryBox({itemList, name, id, addClick, deleteItem}){
    //console.log(itemList);
    //const [itemObject, setItemObject] = useState(itemList);
    
    /* const deleteItem = async(id) => {
        if(window.confirm("Are you sure you want to permanently delete this item?")){
            setItemObject(itemObject.filter((item) => item.id !== id));
            response = await axios.delete(`http://localhost:3000/?item=${id}`);
        }
      } */
    return(
        <div className='categoryBox' id = {id}>
            <div className='categoryHeader'>
                <div className='categoryName'>
                    <h2>{name}</h2>
                </div>
                <Button text = {"Add Item"} id = {id} handleClick={addClick}/>
            </div>
            <div className='categoryContent'>
                <ul>
                    {itemList.map((item)=>{
                        return(
                            <li key={item.id}>
                                <ItemBox id={item.id} name = {item.name} qty = {item.quantity} deleteClick = {deleteItem}/>
                            </li>
                        )
                    })}
                </ul> 
            </div>
        </div>
    )
}
export default CategoryBox