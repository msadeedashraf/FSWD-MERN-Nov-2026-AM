import { Link } from "react-router-dom";

const NotFound = () => {
  return (
     <main>
      <h2>404 - Page Not Found</h2>
      <p>The page you requested does not exist.</p>
      <Link to="/">Return Home</Link>
    </main>
  )
}

export default NotFound