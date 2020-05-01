import React from 'react';
import { Link } from 'react-router-dom';
import './styles/About.css';

const HowToSchedule = () => (
  <div>
    <h1 className="my-4">
      How to
      {' '}
      <s>train</s>
      {' '}
      schedule your
      {' '}
      <s>dragon</s>
      {' '}
      class
    </h1>
    <h3 className="mb-3 bold">To schedule an amazing dragon flying class follow the steps:</h3>
    <ol className="ordered-list">
      <li className="list-item">
        Signup clicking
        {' '}
        <Link to="/signup">here.</Link>
        {' '}
        You will be redirected to login page. So, login.
        <div>
          <img src="/contents/signup-print.png" alt="Signup print" className="list-image-50" />
          <img src="/contents/login-print.png" alt="Login print" className="list-image-50 my-4" />
        </div>
      </li>
      <li className="list-item">
        Choose a dragon trainer in the
        {' '}
        <Link to="/instructors">instructors page.</Link>
        {' '}
        <s>Some of them</s>
        {' '}
        All of them are very efficient.
        <img src="/contents/instructors-print.png" alt="Login print" className="list-image-100 my-4" />
      </li>
      <li className="list-item">
        Click in the button to be redirected to the instructor&apos;s schedule page
        <img src="/contents/instructor-print.png" alt="Login print" className="list-image-100 my-4" />
      </li>
      <li className="list-item">
        Choose a spot. You can schedule times with  a green text.
        Times with a yellow text were already scheduled by you and red text shows other user&apos;s times.
        Click on Barf and Belch to navigate to previous week&apos;s or next week&apos;s schedulle.
        <img src="/contents/schedule-print.png" alt="Login print" className="list-image-100 my-4" />
      </li>
    </ol>
    <p className="list-item">PS: Dohko insists that, although he really trained a dragon, it&apos;s not a riding one.</p>
  </div>
);

export default HowToSchedule;
