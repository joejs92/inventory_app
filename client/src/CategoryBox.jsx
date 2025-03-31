import {useState, useEffect} from 'react';
import Button from './button.jsx';
import ItemBox from './ItemBox';

function CategoryBox({itemList, name, id}){
    const [itemObject, setItemObject] = useState(itemList);
    //here goes the function to add an item.
    return(
        <div className='categoryBox' id = {id}>
            <div className='categoryHeader'>
                <div className='categoryName'>
                    <h2>{name}</h2>
                </div>
                <Button>"Add Item"</Button>
            </div>
            <div>
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