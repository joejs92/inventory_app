import Button from './button';

function MyModal({closeModal, id}){
    return(
        <section className="modal">
            {id == 'add'? (
                <form method='post'>
                    <label for="newCategory">New Category:</label>
                    <input type="text" id="newCategory" placeholder={"New Category Name"}></input>
                </form>
            ):(
                <form method='post'>
                    <label for="newItem">New Item:</label>
                    <input type="text" id="newItem" placeholder={"Item Name"}></input>
                    <label for="newItemQty">Item Quantity:</label>
                    <input type="text" id="newItemQty" placeholder={"Number of Items"}></input>
                </form>
            )}
            <div>
                <Button text = {"Close"} handleClick={closeModal}/>
                <Button text = {"Submit"} />
            </div>
        </section>
    )
}
//https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/
//https://www.youtube.com/watch?v=ZCvemsUfwPQ&t=870s
export default MyModal;