import Button from './button';

function MyModal({closeModal}){
    return(
        <section className="modal">
            <Button text = {"Close Modal"} handleClick={closeModal}/>
        </section>
    )
}

export default MyModal;