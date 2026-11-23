
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Mainsection from "./components/Mainsection";
import Joblist from "./components/Joblist";
import Jobsearch from "./components/Jobsearch";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Contacts from "./components/Contacts";
import NotFound from "./components/NotFound";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
   <Navbar/>
   <Routes>

    <Route path='/' element={<Mainsection/>}/>
    <Route path='/job_listing' element={<Joblist />}/>
    <Route path="/job_search" element={<Jobsearch />} />
<Route path="/privacy" element={<Privacy />} />
 <Route path="/term_service" element={<Terms />} />
 <Route path="/contact_us" element={<Contacts/>} />
 <Route path="*" element={<NotFound />} />
   </Routes>

   <Footer/>

    </>
  )
}

export default App
