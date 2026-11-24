import { Link } from "react-router-dom";
const Footer = () => {
  return (
   <footer>
      <p>
        &copy; My Job Board. All rights reserved.{" "}
        <Link to="/contact_us">Contact Us</Link>
        {" | "}
        <Link to="/term_service">Terms</Link>
        {" | "}
        <Link to="/privacy">Privacy</Link>
      </p>
    </footer>
  )
}

export default Footer