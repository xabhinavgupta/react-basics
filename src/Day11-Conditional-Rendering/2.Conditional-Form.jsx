import { useState } from "react"

const ConditionalRenderingForm = () =>{
    const [formVal, setFormVal] = useState("");
    const onInputChange = (e) =>{
        setFormVal(e.target.value);
    }

    return(
        <div>
            <input type="text" placeholder="Enter email" value={formVal}
            name="email" onChange={onInputChange}/>
            {formVal.length > 0 ? <h1>You have entered {formVal}</h1> : <h1>Nothing is entered</h1>}
            <h1>You have entered {formVal ? formVal : "nothing"}</h1>
        </div>        
    )
}
export default ConditionalRenderingForm;