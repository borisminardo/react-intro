import BaseInput from "./BaseInput";

function TelefonoInput(props: any) {



    return  (
      <>
      <BaseInput
       labelName={props.labelName}
        type={props.type}
        id={props.id}
        className={props.className}
        value={props.value}
        placeholder={props.placeholder}
        error={props.error}
        errorMessage={props.errorMessage}
        onChange={props.onChange}
      /> 
      </>
    )
  
  }
  
  export default TelefonoInput;