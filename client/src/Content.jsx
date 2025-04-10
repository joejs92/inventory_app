import {useState, useEffect} from 'react';
import Button from './button';
import CategoryButton from './CategoryButton.jsx';
import CategoryBox from './CategoryBox.jsx';
import axios from 'axios';

function Content(){
    const [isDefault, setIsDefault] = useState(true);
    const [APICategories, setAPICategories] = useState([]);
    const [listCategories, setListCategories] = useState([]);

//You need a query to get each unique category.
    const fetchAPI = async()=>{
        const response = await axios.get("http://localhost:3000/");
        setAPICategories(response.data);
        console.log(response);
    }

    return (
        <>
          <div>{APIText.map((item)=>{
            return (
          <div key={item.index} >
            <p>{item.category}</p>
          </div>
          )
          })}</div>
        </>
    )
    
}