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

  function openModalFunction(id){
    setComponentId(id);
    setOpenModal(true);
  }

  function closeModalFunction(){
    setOpenModal(false);
  }

  function sendModalInfo(formData){
    if(componentId == 'addCategory'){
      const query = formData.get("newCategory");
      //window.alert(`${query}`);
      setOpenModal(false);
    }
    else{
      const newItem = formData.get("newItem");
      const newItemQty = formData.get("newItemQty");
      window.alert(`${newItem},${newItemQty}`);
      setOpenModal(false);
    }
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
      setState={setState}/>
      <Footer/>
      {openModal && <><MyModal closeModal={closeModalFunction} id = {componentId} submitModal={sendModalInfo}/> <div className='overlay' onClick={()=>closeModalFunction()}></div></>}
    </div>
  )
}

export default App
