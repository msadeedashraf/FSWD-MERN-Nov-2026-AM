const Employee = ({name,department, salary}) => {
  return (
    <>
    <h2>My name is {name}</h2>
    <p>Im working in {department} department</p>
    <p>Salary: ${salary}</p>
    
    </>
  )
}

export default Employee