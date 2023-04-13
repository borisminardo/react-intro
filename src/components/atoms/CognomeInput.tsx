import BaseInput from "./BaseInput";

function CognomeInput(props: any) {

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
        onChange={props.onChange}
      /> 
      </>
    )
  
  }
  
  export default CognomeInput;