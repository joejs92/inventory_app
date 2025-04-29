import {useState, useEffect} from 'react';
import Button from './button';
import CategoryButton from './CategoryButton.jsx';
import CategoryBox from './CategoryBox.jsx';
import axios from 'axios';

function Content(){
  const [APIText, setAPIText] = useState([]);
  const [defaultState, setDefaultState] = useState(true);
  const [category, setCategory] = useState("");
  const [categoryText, setCategoryText] = useState([]);

  function setState(){
    setDefaultState(true);
    setCategory("");
    setCategoryText([]);
    fetchAPI(true);
  }

  let response;
  const fetchAPI = async (defaultState, category) => {
    if(defaultState == true){
      response = await axios.get("http://localhost:3000/");
      setAPIText(response.data);
    }
    else{
      response = await axios.get(`http://localhost:3000/?category=${category}`);
      setCategoryText(response.data);
    }
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
    <div className='content'>
      {defaultState ? (
        <>
        {APIText.map((item)=>{
          return (
            <div onClick = {()=>buttonTest(item.category)} className = 'categoryBtnWrapper'>
              <CategoryButton text = {item.category} id = {item.category} handleClick={buttonTest} />
            </div>
          )
        })}
        <div onClick = {()=>buttonTest("all")} className = 'categoryBtnWrapper'>
              <CategoryButton text = {"All Categories"} id = {'all'} handleClick={buttonTest} />
        </div>
        </>
      ):(
        <>
          {categoryText.map((categoryItem)=>{
            console.log(categoryItem);
            //For some reason it isn't grabbing the updated APIText state
            //before rendering.
            return(
              <CategoryBox itemList={categoryItem.inventory} name = {categoryItem.category} id = {categoryItem.category}/>
            )
          })}
          {/* <CategoryBox itemList={APIText} name = {category} id = {category}/> */}
          <Button text = {"Categories"} handleClick={setState} id = "categoryBtn"/>
        </>
      )}
    </div>
  )
}

export default Content;