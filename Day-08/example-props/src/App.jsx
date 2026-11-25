
import './App.css'
import Car from './Car'
import Employee from './Employee'
import Greeting from './Greeting'
import Students from './Students'

const studentInfo = {
name: "Faith",
subject : "React",
phone : '6471234567',
email : 'abc@gmail.com'
}

const myDate = new Date() ;

function App() {

  return (
  <>
  <h1>Learning Props</h1>

<hr />

<Greeting name="Sadeed" mydate={myDate.toDateString()}/>

<hr />
 
  <Car brand='Tesla'/>
   {/* <Car brand='Honda'/>
   <Car brand='Mazda'/> */}
<hr />

<Students studentinfo= {studentInfo} />

<hr />
<h3>Array Destructuring Example</h3>
<Employee name='Sara' department='Marketing' salary='5000'/>

  </>
  )
}

export default App
