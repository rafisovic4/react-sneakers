import { useContext, useRef } from "react";
import { ModalContext } from "../../pages/Root";

const Modal = () => {

    const {modal, toggleModal} = useContext(ModalContext);

    const overlayRef = useRef();

    const close = (event) => {
        if(event.target === overlayRef.current) {
            toggleModal();
        }
    };

    return (
        <section onClick={(e) => close(e)} ref={overlayRef} className={`overlay ${modal ? "active" : ""}`}>
            <div className="modal">
                <header className="modal-header">
                    <h2>Корзина</h2>
                </header>
                <div className="modal-body">

                </div>
                <footer className="modal-footer">

                </footer>
            </div>
        </section>
    )
}

export default Modal;