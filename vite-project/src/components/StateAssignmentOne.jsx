import { useState } from "react";
function StateAssignmentOne() {
    const [count, setCount] = useState(0);
    const clickHandler = ()=>{setCount(count+1);};
    return (
      <div>
        <section className="StateAssignmentOne">
            <button onClick={clickHandler}>{count}</button>
        </section>
      </div>
    )
  }
  
  export default StateAssignmentOne