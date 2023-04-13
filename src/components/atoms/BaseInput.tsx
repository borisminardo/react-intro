import Message from "./Message";
import ErrorLabel from "./ErrorLabel";
import { useState } from 'react';

function BaseInput(props: any) {
      
    const [value, setValue] = useState("");

    return  (
        <>
    <label className="label-width" htmlFor={props.id}>  {props.labelName} </label>
        <input
            type={props.type}
            id={props.id}
            className=""
            placeholder={props.placeholder}  
            value={props.value}
            onChange={props.onChange}
      />
       <p style={{color:'red'}}>{props.error}</p>
        {/* <pre><code>{JSON.stringify(value, undefined, 2)}</code></pre> */}
   
   
 {/*   DA USARE DOPO */}
    {/*   {props.showErrorMessage && props.error ? ( 
      <div className="mt-2"> 
            <Message type="danger"> 
                <ErrorLabel 
                    error={props.error} 
                    id={`error_${props.id}`} 
                /> 
            </Message> 
      </div> ) :
        ( 
            <></> 
        )
       } */}
    </>)
  
  }
  
  export default BaseInput;