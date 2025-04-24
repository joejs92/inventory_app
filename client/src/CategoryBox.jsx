import {useState, useEffect} from 'react';
import Button from './button.jsx';
import ItemBox from './ItemBox';

function CategoryBox({itemList, name, id}){
    const [itemObject, setItemObject] = useState(itemList);
    //here goes the function to add an item.
    //console.log(itemList);
    return(
        <div className='categoryBox' id = {id}>
            <div className='categoryHeader'>
                <div className='categoryName'>
                    <h2>{name}</h2>
                </div>
                <Button text = {"Add Item"}/>
            </div>
            <div className='categoryContent'>
                <ul>
                    {itemList.map((item)=>{
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