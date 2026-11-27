import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

//For React Icons
//https://www.npmjs.com/package/react-icons
//https://react-icons.github.io/react-icons/search/#q=Trash

const Content = () => {

const [items, setItems] = useState(

[ {id: 1, checked: true, item: 'Get some milk'} , 
  {id: 2, checked: false, item: 'Need Bread'} , 
  {id: 3, checked: true, item: 'Grab some eggs too'} ,   
  {id: 3, checked: true, item: 'Grab some eggs too'} ,   
  {id: 3, checked: false, item: 'Grab some eggs too'} ,   
  {id: 3, checked: true, item: 'Grab some eggs too'} ,   
]
);


    

  return (
    <main>


      <ul>
        {items.map( (item)=>(

<li className="item" key={item.id} >
  <input type="checkbox" 
  checked={item.checked}
  />
  <label>{item.item} </label>
 
<FaTrashAlt role="button" tabIndex={0}/>

</li>

        )  )}
      </ul>

    </main>
      // <p style={{color:'grey', textAlign:'center'}}>Hello {handleNameChange()}</p>
  )
}

export default Content