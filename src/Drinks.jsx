import { Link } from "react-router-dom";

const Drinks = () => {
  return (
    <div>
      <h1>HERE ARE YOUR DRINKS!!!!</h1>
      <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGZmdWs2dXo2ejFsYXc3OWcxMm02eGo5a2c2NXAwbmsyMGM4bmtyZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4FGEj3ORYD3pt67K/giphy.gif" />
      <p><Link to='/'>GO BACK</Link></p>
    </div>
  )
};


export default Drinks;