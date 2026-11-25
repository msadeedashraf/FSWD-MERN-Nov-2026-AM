import Car from "./Car"


const Greeting = (props) => {
  return (
   <>

<h2>Welcome {props.name}, today is {props.mydate}</h2>
<Car brand='BMW'/>

   </>
  )
}

export default Greeting