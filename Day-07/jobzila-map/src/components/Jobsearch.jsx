

const Jobsearch = () => {
  return (
    <main>
      <section className="contact-section">
        <h2>Job Search</h2>

        <div className="contact">
          <form className="contact-form">
            <input
              type="text"
              id="keyword"
              name="keyword"
              required
              placeholder="Keyword"
            />

            <input
              type="text"
              id="location"
              name="location"
              required
              placeholder="Location"
            />

            <select name="category" id="category" defaultValue="0">
              <option value="0">All Categories</option>
              <option value="1">IT</option>
              <option value="2">Finance</option>
              <option value="3">Billing</option>
              <option value="4">Marketing</option>
            </select>

            <input type="submit" value="Search Jobs" />
          </form>
        </div>
      </section>
    </main>
  )
}

export default Jobsearch