import Button from './button';

function MyModal({closeModal}){
    return(
        <section className="modal">
            <form method='post'>
                <label for="newCategory">New Category:</label>
                <input type="text" id="newCategory" placeholder='New category name.'></input>
            </form>
            <div>
                <Button text = {"Close"} handleClick={closeModal}/>
                <Button text = {"Submit"}/>
            </div>
        </section>
    )
}
//https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/
//https://www.youtube.com/watch?v=ZCvemsUfwPQ&t=870s
export default MyModal;