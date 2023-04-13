import BaseInput from "./BaseInput";

function CognomeInput(props: any) {

    return  (
      <>
      <BaseInput
       labelName={props.labelName}
        type={props.type}
        id={props.id}
        className="mb-3"
        value={props.value}
        placeholder={props.placeholder}
        showErrorMessage={props.showErrorMessage}
        error={props.error}
        errorMessage={props.errorMessage}
        onChange={props.onChange}
      /> 
      </>
    )
  
  }
  
  export default CognomeInput;