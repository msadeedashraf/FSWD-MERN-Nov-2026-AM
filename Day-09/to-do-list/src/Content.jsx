

const Content = () => {


    const handleNameChange = () => {
    const names = ["Faith", "Kevin", "Clark", "Ruth", "Hazla", "Frank", "Sara"];
    const i = Math.floor(Math.random() * names.length);
    return names[i];
  };
  return (
      <p>Hello {handleNameChange()}</p>
  )
}

export default Content