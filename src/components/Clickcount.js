import {useState} from "react";
function Clickcount(params){
    const [count, setCount]= useState(0);
    const event=function(){
        setCount(count+1);
    }
    const event1=function(){
        setCount(count-1);
    }
    return(
        <div>
            <button onClick= {event}>Click me</button><br></br>
            <button onClick= {event1}>Click me</button><br></br>
            <label>Click count: {count}</label>
        </div>
    );

}
export default Clickcount;