import { useState } from "react";

function Input(){
    const[name, setName]= useState('');
    const onChangeHandler = (event) => {

        setName(event.target.value);
        console.log(event.target.value);
          
    }
    return(
        <div >
            Mời nhập
            <input onChange= { onChangeHandler } type="text" name="fullname"></input>
            <p>Họ tên: {name}</p>
        </div>
    )
}
export default Input;