import { Routes, Route, Link } from 'react-router-dom'

import './VendingMachine.css';


const VendingMachine = () => {
  return (
    <div className='VendingMachine'>
      <div className='VendingMachine-hello'>
        <p>HELLO I AM A VENDING MACHINE.  WHAT WOULD YOU LIKE TO EAT?</p>
      </div>
      {/* <iframe src="https://giphy.com/embed/3oKIPaI8ZrQS9wnigM" width="321" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */}
      <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDkyMmZ1Y2dpaTUydXZmcXR1cXpzeDViano2dms3N3k5NDE3djF1dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPaI8ZrQS9wnigM/giphy.gif" width="321" height="480" />
      <div className='VendingMachine-links'>
        <p><Link to='/chips'>CHIPS</Link></p>
        <p><Link to='/cookies'>COOKIES</Link></p>
        <p><Link to='/drinks'>DRINKS</Link></p>
      </div>
    </div>
  )
};


export default VendingMachine;