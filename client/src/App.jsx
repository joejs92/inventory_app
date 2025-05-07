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

  const addFunction = async() => {
    console.log(APIText);
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
      <Content modalFunction = {openModalFunction}/>
      <Footer/>
      {openModal && <><MyModal closeModal={closeModalFunction} id = {componentId} submitModal={sendModalInfo}/> <div className='overlay' onClick={()=>closeModalFunction()}></div></>}
    </div>
  )
}

export default App
