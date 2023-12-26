const Allforms = (props) => {
    const allinputs = props.inputs
    
    const InputElement =(innerprops)=>{
    return <input type={innerprops.text === "Username"?"text":"password"} placeholder={innerprops.text} />
    }

    const mappedInputs = allinputs.map((inputs)=>{
        return <InputElement text = {inputs} key ={inputs}/>
    })
    return (  <>
        <div className="form_wrapper">
            <h3>CHIT CHAT</h3>
            <form >
                    {mappedInputs }
                    <button> {props.type}</button>
            </form>
        </div>
    </>);
}
 
export default Allforms;