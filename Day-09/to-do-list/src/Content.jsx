

const Content = () => {


    const handleNameChange = () => {
    const names = ["Faith", "Kevin", "Clark", "Ruth", "Hazla", "Frank", "Sara"];
    const i = Math.floor(Math.random() * names.length);
    return names[i];
  };


  const handleClick = () => {
    console.log('We pressed click me')
    //alert('We presses click me')
  }
  const handleClick2 = (name) => {
    console.log(`${name} pressed 2nd click me`)
    //alert('We presses click me')
  }
  const handleClick3 = (e) => {
    console.log(e.target.innerText)
    //alert('We presses click me')
  }

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {handleNameChange()}</p>
      <p>Welcome to our To-Do-List</p>


      <button onClick={handleClick} >Click Me</button>
      <button onClick={() => handleClick2('faith')  } >Click Me</button>
      <button onClick={(e) => handleClick3(e)  } >Press Me</button>


    </main>
      // <p style={{color:'grey', textAlign:'center'}}>Hello {handleNameChange()}</p>
  )
}

export default Content