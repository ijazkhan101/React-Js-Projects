
import '../App.css';
import { useState } from 'react';
function Hook() {
  const name =" useState Hook ";

  const [age ,setAge ] = useState(0);
  const [inputValue , setInputValue] = useState("");
  const handleChange =(event) =>{
    setInputValue(event.target.value);
  }

  const increaseeAge = () =>{
    setAge(age + 1);
    console.log(setAge)
  };
  return (
    <div className="App">
      <h1 className='listcss'> {name} </h1>
        {age}
        <button onClick={increaseeAge}> increase Age</button>

        <br />
        <input type="text" onChange={handleChange}/>
        {inputValue}
    </div>
  );
}

export default Hook;
