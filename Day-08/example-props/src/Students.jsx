

const Students = (props) => {
  return (
    <>
    <h2>My Name is {props.studentinfo.name}</h2>
    <p>Im learning {props.studentinfo.subject}</p>
    <h3>Personal Details</h3>
    <p>My Phone is {props.studentinfo.phone}</p>
    <p>My Email is {props.studentinfo.email}</p>
    </>
  )
}

export default Students