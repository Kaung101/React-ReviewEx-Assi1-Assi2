import { useState } from "react";
import '../styles/test.css';
function StateAssignmentTwo() {
    const [numbers, setNumbers] = useState([]);
    const handleClick = ()=>{
        const randomNum = Math.floor(Math.random()*10);
        setNumbers([...numbers, randomNum]);
    };
    return (
      <section className="StateAssignmentTwo">
        <button onClick={handleClick}>Click me!</button>
        <ul >
            {numbers.map((number,index) => (
                <li key ={index}>{number}</li>
            ))}
        </ul>
      </section>
    );
  }
  
  export default StateAssignmentTwo;