import Button from './button';

function MyModal({closeModal, id, submitModal, items}){
    //the buttons look a bit weird and will have to be reworked, but having 
    //them like this prevents a warning about disconecting the form.
    //An example of complicated conditional rendering.
    function Modal(){
     if(id == 'category'){
         return(
             <section className='modal'>
                 <form action={submitModal}>
                     <label htmlFor = "newCategory">New Category:</label>
                     <input name = "newCategory" id = "newCategory" placeholder={"New Category Name"}></input>
                     <button type='submit'>Submit</button>
                 </form>
                 <Button text = {"Close"} handleClick={closeModal}/>
             </section>
         )}
     else if(id == 'changeQuant'){
         return(
            <section className='modal'>
                {/* <p>{items.id}</p>
                <p>{items.name}</p>
                <p>{items.quantity}</p> */}
                <form action = {submitModal}>
                    <label htmlFor = "newQuant">{items.name} Quantity:</label>
                    <input name = "newQuant" id = "newQuant" placeholder = {items.quantity}></input>
                    <button type="submit">Submit</button>
                </form>
                <Button text = {"Close"} handleClick={closeModal}/>
            </section>
         )
     }
     else{
         return(
             <section className='modal'>
                <form action = {submitModal}>
                    <label htmlFor = "newItem" >New Item:</label>
                    <input name = "newItem" id="newItem" placeholder={"Item Name"}></input>
                    <label htmlFor = "newItemQty" >Item Quantity:</label>
                    <input name="newItemQty" id="newItemQty" placeholder={"Number of Items"}></input>
                    <button type='submit'>Submit</button>
                </form>
                <Button text = {"Close"} handleClick={closeModal}/>
             </section>
            );
        }
    };
    return(
        <Modal />
    )
 };
//https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/
//https://www.youtube.com/watch?v=ZCvemsUfwPQ&t=870s
export default MyModal;