import React, { useState } from 'react';
import Play from './assets/video.png';
import Phone from './assets/phone.png';
import User from './assets/user.png';
import PurpleArrow from './assets/purplearrow.png';
import YellowArrow from './assets/orangearrow.png';

import './App.css';
import Modal from './components/Modal';
import Footer from './components/Footer';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [init, setInit] = useState(true);

  return (
    <>
      <div className="app">
        <div className="app__intro">
          <div className="app__image">
            <img src={User} alt="user" width="30px" />
          </div>
          <h3>Good Morning Silm!</h3>
        </div>
        <div>
          <div className="app__schedule">
            <h1>Schedule</h1>
            <a href="/" className="app__schedule-link">
              Reconfigure Services
            </a>
          </div>
          <div className="app__card ">
            <div className="app__card-left app__card-left--light-green">
              <p>
                Your account is inactive.
                <span className="text-bold">15% off</span> offer until June 23.
              </p>
            </div>

            <div className="app__card-right app__card-right--green">
              <div className="text-center">
                <p>
                  <strike>N75,000</strike>{' '}
                </p>
                <p>Pay N62,800</p>
              </div>
            </div>
          </div>
          <div className="app__card">
            <div className="app__card-left app__card-left--light-yellow">
              <p>View your meals for the week.</p>
            </div>
            <div
              className={`app__card-right app__card-left--yellow ${
                showModal ? '' : 'increase-index'
              }`}
              onClick={() => {
                setShowModal(true);
                setInit(false);
              }}>
              <p>Check 'em</p>
            </div>
          </div>
        </div>
        <div className="getting-started">
          <h3 className="getting-started__header">Getting Started</h3>
          <p className="getting-started__text">
            Let's answer any questions you have left!
          </p>

          <div className="getting-started__option">
            <div className="getting-started__option-item">
              <div className="getting-started__phone-oval">
                <img src={Phone} alt="video" width="20px" />
              </div>
              <p className="getting-started__instruction">
                Set up a call with your gardener
              </p>
              <div className=" getting-started__action-container">
                <a
                  href="/"
                  className="getting-started__action getting-started__action--purple">
                  Do it
                </a>
                <img src={PurpleArrow} alt="arrow" width="10px" />
              </div>
            </div>
            <div className="getting-started__option-item">
              <div className="getting-started__play-oval">
                <img src={Play} alt="video" width="14px" />
              </div>
              <p className="getting-started__instruction">
                Lose yourself to this video
              </p>
              <div className=" getting-started__action-container">
                <a
                  href="/"
                  className="getting-started__action getting-started__action--yellow">
                  Play
                </a>
                <img src={YellowArrow} alt="arrow" width="10px" />
              </div>
            </div>
          </div>
        </div>
        <div className="timeline">
          <h4 className="timeline-text">Tomorrow</h4>
          <div className="timeline__row">
            <div className="timeline__date">
              <p>9 - 10am</p>
            </div>
            <div className="timeline__detail">
              <div>
                <p>
                  Your cleaner is coming in to give your apartment the looks
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
        <div className={init ? 'init' : ''}>
          <Modal display={showModal} closeModal={() => setShowModal(false)} />
        </div>
      </div>
    </>
  );
}

export default App;
