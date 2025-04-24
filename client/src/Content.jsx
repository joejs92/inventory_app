import {useState, useEffect} from 'react';
import Button from './button';
import CategoryButton from './CategoryButton.jsx';
import CategoryBox from './CategoryBox.jsx';
import axios from 'axios';

function Content(){
  const [APIText, setAPIText] = useState([]);
  const [defaultState, setDefaultState] = useState(true);
  const [category, setCategory] = useState("")

  function setState(){
    setDefaultState(true);
    setCategory("");
    fetchAPI(true);
  }

  let response;
  const fetchAPI = async (defaultState, category) => {
    if(defaultState == true){
      response = await axios.get("http://localhost:3000/");
    }
    else{
      response = await axios.get(`http://localhost:3000/?category=${category}`);
    }
    setAPIText(response.data);
  };

  useEffect(()=>{
    fetchAPI(defaultState, category);
  },[]);

  function buttonTest(id){
    setCategory(id)
    setDefaultState(false);
    fetchAPI(false, id);
  }

  return (
    <div>
      {defaultState ? (
        <div>
        {APIText.map((item)=>{
          return (
            <div onClick = {()=>buttonTest(item.category)} id = {item.category}>
              <CategoryButton text = {item.category} id = {item.id} handleClick={buttonTest} />
            </div>
          )
        })}
        </div>
      ):(
        <>
          <Button text = {"Categories"} handleClick={setState}/>
          <CategoryBox itemList={APIText} name = {category} id = {category}/>
        </>
      )}
    </div>
  )
}

export default Content;