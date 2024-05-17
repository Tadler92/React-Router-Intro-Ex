import { Routes, Route, Link } from 'react-router-dom'


const VendingMachine = () => {
  return (
    <>
      <div>
        <p>HELLO I AM A VENDING MACHINE.  WHAT WOULD YOU LIKE TO EAT?</p>
      </div>
      <div>
        <Link to='/chips'>CHIPS</Link>
        <Link to='/cookies'>COOKIES</Link>
        <Link to='/drinks'>DRINKS</Link>
      </div>
    </>
  )
};


export default VendingMachine;