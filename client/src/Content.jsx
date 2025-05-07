import {useState, useEffect} from 'react';
import Button from './button';
import CategoryButton from './CategoryButton.jsx';
import CategoryBox from './CategoryBox.jsx';
import axios from 'axios';

function Content({modalFunction}){
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

  const deleteFunction = async(category) => {
    response = await axios.delete(`http://localhost:3000/?category=${category}`);
    setAPIText(response.data);
  }

  function deleteButton(category){
    if(window.confirm("Are you sure you wish to delete this category and everything in it?")){
      deleteFunction(category);
    }
  }

  return (
    <div className='content'>
      {defaultState ? (
        <>
        {APIText.map((item)=>{
          return (
            <div onClick = {()=>buttonTest(item.category)} className = 'categoryBtnWrapper'>
              <CategoryButton text = {item.category} id = {item.category} handleClick={deleteButton} />
            </div>
          )
        })}
        <div onClick = {()=>buttonTest("all")} className = 'categoryBtnWrapper'>
              <CategoryButton text = {"All Categories"} id = {'all'}/>
        </div>
        <div onClick={()=>modalFunction('addCategory')} className = 'categoryBtnWrapper'>
              <CategoryButton text = {"Add Category"} id = {'addCategory'} />
        </div>
        </>
      ):(
        <>
          {categoryText.map((categoryItem)=>{
            return(
              <CategoryBox itemList={categoryItem.inventory} 
              name = {categoryItem.category} 
              id = {categoryItem.category}
              addClick = {modalFunction}
              />
            )
          })}
          <Button text = {"Categories"} handleClick={setState} id = "categoryBtn"/>
        </>
      )}
    
    </div>
  )
}
//closeModal = {closeModalFunction}
export default Content;