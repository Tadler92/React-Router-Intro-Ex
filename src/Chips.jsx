import { Link } from "react-router-dom";

const Chips = () => {
  return (
    <div>
      <h1>HERE ARE YOUR CHIPS!!!!</h1>
      <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHJxZTFhMmtkaGJubTdoNGc3YTY2cXE3bGV1eGRheHg0aGJlbHp3NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/avLffXT6HClxIEidov/giphy.gif" />
      <p><Link to='/'>GO BACK</Link></p>
    </div>
  )
};


export default Chips;