import { useState } from 'react';
import Button from 'react-bootstrap/Button';


function Count()
{
    const [ count,setCount] = useState(0);
      function dec() {
        setCount(count - 1);
      }
      function reset() {
        setCount(0);
      }
      function inc() {
        setCount(count + 1);
      }

    return(
 <div style={{margin : "auto", height : "500px", width : "500px", top: "center", textAlign:"center",backgroundColor:"white", position:"relative",borderRadius:"50%"}}>
     <div style={{backgroundColor:"navy", height:"400px", width:"400px", textAlign:"center",top:"10%",left:"10%", position:"absolute",borderRadius:"50%"}}>
     <div style={{margin:"20% auto"}}>
     <h1>Counter</h1>
     <h1>{count}</h1>
        <div>
        <Button variant="success" onClick={dec}>-</Button>
        <Button variant="success" onClick={reset} style={{width:"60px"}}>Reset</Button>
        <Button variant="success" onClick={inc}>+</Button></div>
     </div>
     </div>
 </div>
    )
      
}
export default Count;