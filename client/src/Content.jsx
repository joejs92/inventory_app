import {useState, useEffect} from 'react';
import Button from './button';
import CategoryButton from './CategoryButton.jsx';
import CategoryBox from './CategoryBox.jsx';
import axios from 'axios';

function Content(){
    const [isDefault, setIsDefault] = useState(true);
    const [APICategories, setAPICategories] = useState([]);
    const [listCategories, setListCategories] = useState([]);

    function buttonTest(id){
      window.alert(id);
    }

//You need a query to get each unique category.
    const fetchAPI = async()=>{
        const response = await axios.get("http://localhost:3000/");
        setAPICategories(response.data);
        console.log(response);
    }

    useEffect(()=>{
      fetchAPI();
    },[]);

    return (
        <>
          <div>{APICategories.map((item)=>{
            return (
              <div onClick = {()=>buttonTest(item.category)} id = {item.category}>
                <CategoryButton text = {item.category} id = {item.category} handleClick={buttonTest} />
              </div>
            )
          })}</div>
        </>
    )
    
}
console.log(Event);

export default Content;