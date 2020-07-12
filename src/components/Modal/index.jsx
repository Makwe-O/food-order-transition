import React, { useState } from 'react';
import Eba from '../../assets/eba.png';
const Modal = ({ display, closeModal }) => {
  const [isFull, setIsFull] = useState(false);
  const [init, setInit] = useState(true);

  return (
    <div>
      <div className={'modal'}>
        <div
          className={display ? `modal__container` : 'modal__container-reverse'}>
          {/* <button onClick={() => setIsFull(true)}>Go Fullscreen</button> */}

          <div className="modal__header">
            <div className="modal__header-title">
              <h1>Today's Meals</h1>
            </div>
            <div className="modal__header-close" onClick={() => closeModal()}>
              <span>X</span>
            </div>
          </div>
          <div className="modal__body">
            <ul>
              <li
                style={{ '--animation-order': 1 }}
                className={display ? 'foward' : 'reverse'}
                onClick={() => {
                  setIsFull(true);
                  setInit(false);
                }}>
                <div className="modal__item">
                  <div>
                    <img src={Eba} alt="eba" width="60px" />
                  </div>
                  <div>
                    <p className="modal__item-name">Akara & Pap</p>
                    <p className="modal__item-class">Carbohydrate</p>
                  </div>
                </div>
              </li>
              <li
                style={{ '--animation-order': 2 }}
                className={display ? 'foward' : 'reverse'}
                onClick={() => {
                  setIsFull(true);
                  setInit(false);
                }}>
                <div className="modal__item">
                  <div>
                    <img src={Eba} alt="eba" width="60px" />
                  </div>
                  <div>
                    <p className="modal__item-name">Jollof Rice</p>
                    <p className="modal__item-class">Protein</p>
                  </div>
                </div>
              </li>
              <li
                style={{ '--animation-order': 3 }}
                className={display ? 'foward' : 'reverse'}
                onClick={() => {
                  setIsFull(true);
                  setInit(false);
                }}>
                <div className="modal__item">
                  <div>
                    <img src={Eba} alt="eba" width="60px" />
                  </div>
                  <div>
                    <p className="modal__item-name">Gastonton</p>
                    <p className="modal__item-class">Carbohydrate</p>
                  </div>
                </div>
              </li>
              <li
                style={{ '--animation-order': 4 }}
                className={display ? 'foward' : 'reverse'}
                onClick={() => {
                  setIsFull(true);
                  setInit(false);
                }}>
                <div className="modal__item">
                  <div>
                    <img src={Eba} alt="eba" width="60px" />
                  </div>
                  <div>
                    <p className="modal__item-name">Port Domenic</p>
                    <p className="modal__item-class">Carbohydrate</p>
                  </div>
                </div>
              </li>
              <li
                style={{ '--animation-order': 5 }}
                className={display ? 'foward' : 'reverse'}
                onClick={() => {
                  setIsFull(true);
                  setInit(false);
                }}>
                <div className="modal__item">
                  <div>
                    <img src={Eba} alt="eba" width="60px" />
                  </div>
                  <div>
                    <p className="modal__item-name">Akara & Pap</p>
                    <p className="modal__item-class">Carbohydrate</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={init ? 'init' : ''}>
        <div
          className="picture-modal"
          onClick={() => {
            setIsFull(false);
            setInit(true);
          }}>
          <img
            src={Eba}
            alt="eba"
            className={isFull ? `modal-content` : `modal-content-reverse`}
          />
        </div>
        <div
          className={
            isFull
              ? `picture-modal__background`
              : 'picture-modal__background--reverse'
          }></div>
      </div>
      <div
        className={
          display ? `modal__background` : 'modal__background--reverse'
        }></div>
    </div>
  );
};

export default Modal;
