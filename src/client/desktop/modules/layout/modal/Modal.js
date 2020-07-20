import React from 'react';
import Modal from 'react-modal'

const Modall = ({setmodalOpen,modalIsOpen}) =>{


    return (
        <div className="App">
        <button onClick={()=> setmodalOpen(true)} className="btn btn-outline-secondary">Какво ново, днес?</button>
    <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={()=>setmodalOpen(false)}
        style={
            {
                overlay:{
                    backgroundColor: 'grey'
                },
                content:{
                    color: 'grey'
                }
            }
        }
    >
        <h2> Западно и Средноевропейски митрополит Антоний: Причастявайте се само при особена нужда!
            Време е да превърнем своите домове в храмове, призовава Негово Високопреосвещенство.
        </h2>


        <p>"Убедени сме, че светото Причастие никога не е било и няма да бъде източник на зараза, но нека не изкушаваме Господа, нашия Бог.
            Призовавам нашите епархиоти в тези дни да се причастяват само при особена нужда!", казва митрополитът.
            Негово високопреосвещенство изтъква, че коронавирусът е довел до въвеждането на извънредно положение в много страни,
            променил е животът ни и това се е отразило трайно на психологическото състояние на човека."
        </p>

        <p>
            Ето целия текст на посланието на Негово Високопреосвещенство:
            <a className="btn btn-outline-secondary" href="https://bg-patriarshia.bg/news.php?id=317006&fbclid=IwAR2tR-KdGN9QjWbkfyuaTnH0eREqSdEdzQU09nGoyvX6LHkdjCc1rJaagFY" role="button">Линк към текста</a>
        </p>
        <div>
            <button onClick={()=>setmodalOpen(false)} className="btn btn-outline-danger">Изход</button>
        </div>
    </Modal>
        </div>
    );
};

Modal.propTypes = {

};

export default Modall;