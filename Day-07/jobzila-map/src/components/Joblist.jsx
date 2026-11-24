const jobs = [
  {
    id: 1,
    title: "Software Developer",
    company: "ABC Inc.",
    location: "New York, NY",
    description:
      "We are looking for a skilled Software Developer with experience in HTML, CSS, JavaScript, and databases.",
  },
  {
    id: 2,
    title: "Data Scientist",
    company: "XYZ Corp.",
    location: "Hamilton, CA",
    description:
      "We are seeking a Data Scientist with experience in statistics, machine learning, Python, and data visualization.",
  },
  {
    id: 3,
    title: "Data Engineer",
    company: "Filpzila Corp.",
    location: "San Francisco, CA",
    description:
      "We are seeking a Data Scientist with experience in statistics, machine learning, Python, and data visualization.",
  }
];


const Joblist = () => {
  return (
    <main>
        <section class="jobs-listing-section">

            <h2>Job Listing</h2>

{jobs.map(  (job) => ( 

<div class="jobs-listing">
                <h3>{job.title}</h3>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <p>
                {job.description}
              </p>

            </div>

)  ) }

            

          

         

        </section>

    </main>
  )
}

export default Joblist