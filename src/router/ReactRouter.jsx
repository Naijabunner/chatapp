import {BrowserRouter as Router, Route, Routes}from "react-router-dom"
import Signin from "../pages/signin/login";
import RegisterComponent from "../pages/signup/Register";
import Load from "../components/loading";
const Routs = () => {
    return ( 
        <>
        <Router>
            <Routes>
                <Route path= "/" element={<Signin/>}/>
                <Route path= "/register" element={<RegisterComponent/>}/>
                <Route path= "/load" element={<Load/>}/>
            </Routes>
        </Router>
        </>

     );
}
 
export default Routs;