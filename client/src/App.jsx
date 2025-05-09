import { useState, useEffect } from 'react'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Content from './Content.jsx'
import MyModal from './MyModal.jsx'
import axios from 'axios';

//You may need to take the fetch function out of App, and use the result as
//the default APIText state. Will have to change useEffect below.
function App() {
  const [openModal, setOpenModal] = useState(false);
  const [componentId, setComponentId] = useState("")
  const [APIText, setAPIText] = useState([]); //for categories
  const [defaultState, setDefaultState] = useState(true);
  const [category, setCategory] = useState("");
  const [categoryText, setCategoryText] = useState([]);//for CategoryBoxes

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

  const deleteItem = async(id) => {
    const info = {id: id, category: category};
    const query = JSON.stringify(info);
    if(window.confirm("Are you sure you want to permanently delete this item?")){
        response = await axios.delete(`http://localhost:3000/?item=${query}`);
        setCategoryText(response.data);
    } 
  }

  function openModalFunction(id){
    setComponentId(id);
    setOpenModal(true);
  }

  function closeModalFunction(){
    setOpenModal(false);
  }

  const addFunction = async(query, typeOfAdd)=>{
    response = await axios.post(`http://localhost:3000/?query=${query}`);
    if(typeOfAdd == 'category'){
      setAPIText(response.data);
    }
    else if(typeOfAdd == 'inventory'){
      setCategoryText(response.data)
    }  
  }

  function sendModalInfo(formData){
    let info;
    if(componentId == 'category'){
      info = {type: 'category', items: formData.get("newCategory")};
      const query = JSON.stringify(info);
      addFunction(query, info.type);
    }
    else{
      info = {type: 'inventory', items: formData.get("newItem"), quantity: formData.get("newItemQty"), category: componentId};
      const query = JSON.stringify(info);
      addFunction(query, info.type);
    }
    //It should be sent as an object for the sake of consistency.
    //An object needs to be stringified in order to be sent as a parameter query.
    setOpenModal(false);
  }

  return (
    <div className='page'>
      <Header/>
      <Content modalFunction = {openModalFunction}
      APIText={APIText}
      defaultState={defaultState}
      categoryText={categoryText}
      buttonTest={buttonTest}
      deleteButton={deleteButton}
      setState={setState}
      deleteItem = {deleteItem}/>
      <Footer/>
      {openModal && <><MyModal closeModal={closeModalFunction} id = {componentId} submitModal={sendModalInfo}/> <div className='overlay' onClick={()=>closeModalFunction()}></div></>}
    </div>
  )
}

export default App
