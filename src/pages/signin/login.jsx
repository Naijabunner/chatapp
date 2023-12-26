import Allforms from "../../components/forms";

const Signin = () => {
    return (  
        <>
        <Allforms inputs={["Username", "Password"] } type= {"LOG IN"}  />
        </>
    );
}
 
export default Signin;