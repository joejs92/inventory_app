import {useState, useEffect} from 'react';
import Button from './button';
import CategoryButton from './CategoryButton.jsx';
import CategoryBox from './CategoryBox.jsx';

function Content({modalFunction, APIText, defaultState, 
  categoryText, buttonTest, deleteButton, setState}){
  
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
        <div onClick={()=>modalFunction('category')} className = 'categoryBtnWrapper'>
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