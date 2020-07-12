import React, { useState } from 'react';
import Play from './assets/video.png';
import Phone from './assets/phone.png';
import PurpleArrow from './assets/next-purple.svg';
import YellowArrow from './assets/next-yellow.svg';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [init, setInit] = useState(true);

  return (
    <div className="app">
      <div className="app__intro">
        <div className="app__image">
          <img
            src="https://res.cloudinary.com/dnavbc7ny/image/upload/c_scale,w_269/v1588369773/Onyeka_pmmiho.jpg"
            alt="user"
            width="30px"
          />
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

          <div
            className="app__card-right app__card-right--green"
            onClick={() => console.log('hi')}>
            <div className="text-center">
              <p>
                {' '}
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
            <img src={Phone} alt="video" width="40px" />
            <p className="getting-started__instruction">
              Set up a call with your gardener
            </p>
            <a
              href="/"
              className="getting-started__action getting-started__action--purple">
              Do it <img src={PurpleArrow} alt="arrow" width="10px" />
            </a>
          </div>
          <div className="getting-started__option-item">
            <img src={Play} alt="video" width="40px" />
            <p className="getting-started__instruction">
              Lose yourself to this video
            </p>
            <a
              href="/"
              className="getting-started__action getting-started__action--yellow">
              Play <img src={YellowArrow} alt="arrow" width="10px" />
            </a>
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
              <p>Your cleaner is coming in to give your apartment the looks</p>
            </div>
          </div>
        </div>
      </div>
      <div className={init ? 'init' : ''}>
        <Modal display={showModal} closeModal={() => setShowModal(false)} />
      </div>
    </div>
  );
}

export default App;
