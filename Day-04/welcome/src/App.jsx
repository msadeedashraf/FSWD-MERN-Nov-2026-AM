import './App.css'

/*
function MyButton() {
return (
  <>
  </>
)}
*/


function MyButton() {
return (
  <>
  <button onClick={() => {alert('Welcome to CBC')}}> Click Me</button>
  </>
)}


function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}



function App() {
 

  return (
    <>
      <h1>Welcome to my app</h1>
      <MyButton/>
      <AboutPage/>

    </>
  )
}

export default App
