import React, { useState } from 'react';
import Eba from '../../assets/eba.png';
import Jollof from '../../assets/jollof.png';
import Gaston from '../../assets/gaston.png';
import GastonClean from '../../assets/gaston-clean.png';
import Port from '../../assets/port.png';
import Carle from '../../assets/carli.png';
import South from '../../assets/south.png';
import Close from '../../assets/close.png';
const Modal = ({ display, closeModal }) => {
  const [isFull, setIsFull] = useState(false);
  const [init, setInit] = useState(true);
  const [image, setImage] = useState(null);

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
              <img src={Close} alt="close" width="25px" height="25px" />
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
                  setImage(Eba);
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
                  setImage(Jollof);
                }}>
                <div className="modal__item">
                  <div>
                    <img src={Jollof} alt="eba" width="60px" />
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
                  setImage(GastonClean);
                }}>
                <div className="modal__item">
                  <div>
                    <img src={Gaston} alt="eba" width="60px" />
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
                  setImage(Port);
                }}>
                <div className="modal__item">
                  <div>
                    <img src={Port} alt="eba" width="60px" />
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
                  setImage(Carle);
                }}>
                <div className="modal__item">
                  <div>
                    <img src={Carle} alt="eba" width="60px" />
                  </div>
                  <div>
                    <p className="modal__item-name">Carleeille</p>
                    <p className="modal__item-class">Fat & Oils</p>
                  </div>
                </div>
              </li>
              <li
                style={{ '--animation-order': 6 }}
                className={display ? 'foward' : 'reverse'}
                onClick={() => {
                  setIsFull(true);
                  setInit(false);
                  setImage(South);
                }}>
                <div className="modal__item">
                  <div>
                    <img src={South} alt="eba" width="60px" />
                  </div>
                  <div>
                    <p className="modal__item-name">South Chesleyton</p>
                    <p className="modal__item-class">Vegetable</p>
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
            src={image}
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
