import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import { GrClose } from 'react-icons/gr'

function Sidebar() {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen)
    }

    return (
        <>
            <aside className="sidebar">
                <div className="logo">
                    <a>
                        Brand<b>Colors</b>
                    </a>
                </div>
                <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
                    similique?
                </div>
                <nav className="menu">
                    <ul>
                        <li>
                            <a onClick={toggleModal}>About BrandColors</a>
                        </li>
                    </ul>
                </nav>
            </aside>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={toggleModal}
                className="about-modal"
                overlayClassName="about-modal-overlay"
            >
                <div className="btn-div">

                    <button onClick={toggleModal} className="modal-close-btn"><GrClose /></button>
                </div>
                <h3>About BrandColors</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi enim et nemo, sequi quisquam sit.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id iste, at dolores labore totam consectetur autem! Sed voluptates iste et!</p>

            </Modal >
        </>
    );
}

export default Sidebar;
