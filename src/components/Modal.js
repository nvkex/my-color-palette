import React from 'react';
import classes from './Modal.module.css';

const Modal = (props) => {

  const handleHideModal = () => {
    document.querySelector(`.${classes.modalLarge}`).style.zIndex = -1;
    document.querySelector(`.${classes.modalLarge}`).style.opacity = 0;
    props.setDisplay({ display: false });
  }

  if (props.data.display) {
    document.querySelector(`.${classes.modalLarge}`).style.zIndex = 10;
    document.querySelector(`.${classes.modalLarge}`).style.opacity = 1;
  }

  return (
    <div className={classes.modalLarge}>
      <div className={`${classes.modalBox} text-center shadow-lg`}>
        <h3 className={`text-${props.data.color}`}>{props.data.head}</h3>
        <p>{props.data.desc}</p>
        <button className={classes.modalBtn} onClick={handleHideModal}>OK</button>
      </div>
    </div>
  )
}

export default Modal;
