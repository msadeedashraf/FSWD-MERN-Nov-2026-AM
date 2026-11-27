import { useState } from "react";

const Content = () => {

  const [name , setName] = useState('Sadeed');
  const [count, setCount] = useState(1)


    const handleNameChange = () => {
    const names = ["Faith", "Kevin", "Clark", "Ruth", "Hazla", "Frank", "Sara"];
    const i = Math.floor(Math.random() * names.length);
    setName(names[i]) ;
  };


  const handleClick = () => {
    setCount(count+1)    
    console.log(count)
    //console.log('We pressed click me')
    //alert('We presses click me')
  }
  const handleClick2 = () => {
    console.log(count)
    //console.log(`${name} pressed 2nd click me`)
    //alert('We presses click me')
  }
 

  return (
    <main>
      <p onDoubleClick={handleNameChange}>Hello {name}</p>
      <p>Welcome to our To-Do-List</p>


      <button onClick={handleNameChange} >Name Change</button>
      <button onClick={handleClick } >Count</button>
      <button onClick={handleClick2 } >Press Me</button>


    </main>
      // <p style={{color:'grey', textAlign:'center'}}>Hello {handleNameChange()}</p>
  )
}

export default Content