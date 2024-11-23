import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

import deleteBusinesses from "../api/DeleteBusiness";

export default function BusinessStack(props) {
  console.log(props);
  const id = props.id;

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const customStyles = {
    overlay: {
      backgroundColod: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "20px",
      border: "none",
    },
  };

  const deleteBusinessesWrapper = (id) => {
    deleteBusinesses(id);
    setIsOpen(false);
    window.location.reload();
  };

  return (
    <div className='BusinessStack'>
      <section className='flex lg:items-start py-5 px-10'>
        <div className='stack-container-blue-rounded'>
          <div className='text-title-sm'>{props.name}</div>
          <img
            className='object-scale-down rounded-3xl mb-4'
            src={props.img}
            alt={props.name}
          />
          <div className='text-detail-sm mb-4'>{props.description}</div>

          {/* TODO: Add link to result */}
          <Link to={`/result/${id}`} className='btn'>
            See more
          </Link>
          <button onClick={openModal} className='btn-secondary'>
            Delete
          </button>
          <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <div className='text-title-sm'>Delete {props.name}?</div>
            <div className='text-detail-sm'>
              Are you sure you want to delete {props.name}? This action cannot
              be undone.
            </div>
            <button className='btn' onClick={() => deleteBusinessesWrapper(id)}>
              Delete
            </button>
            <button onClick={closeModal} className='btn-secondary'>
              Cancel
            </button>
          </Modal>
        </div>
      </section>
    </div>
  );
}
