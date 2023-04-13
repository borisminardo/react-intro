import BaseInput from "./BaseInput";

function EmailInput(props: any) {

    return  (
      <>
      <BaseInput
       labelName={props.labelName}
        type={props.type}
        id={props.id}
        className="mb-3"
        placeholder={props.placeholder}
        showErrorMessage={props.showErrorMessage}
        error={props.error}
      /> 
      </>
    )
  
  }
  
  export default EmailInput;