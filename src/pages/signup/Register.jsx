import Allforms from "../../components/forms";
const RegisterComponent = () => {
    return ( <>
    <Allforms inputs={["Username","Email","Password", "Confirm Password"] } type= {"LOG IN"}/>
    </> );
}
 
export default RegisterComponent;