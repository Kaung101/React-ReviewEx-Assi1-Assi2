import { useState } from "react";
function StateAssignmentTwo() {
    const [count, setCount] = useState(0);
    const clickHandler = ()=>{setCount(count+1);};
    return (
      <div>
        <section className="StateAssignmentOne">
            <button onClick={clickHandler}>Click me!</button>
        </section>
      </div>
    )
  }
  
  export default StateAssignmentTwo