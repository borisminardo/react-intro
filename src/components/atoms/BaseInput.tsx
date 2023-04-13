interface MyProps {
    labelName: string
    error: boolean
    errorMessage: string
}

type InputBaseProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & MyProps


function BaseInput(props: InputBaseProps) {
     let styleText = {}
    if(props.error){
        styleText =  {color: 'red'}
    }

    return  (
        <>
    <label className="label-width" htmlFor={props.id}>  {props.labelName} </label>
        <input
            type={props.type}
            id={props.id}
            placeholder={props.placeholder}  
            value={props.value}
            onChange={props.onChange}
      />
       <p style={styleText}>{props.errorMessage}</p>
    </>)
  
  }
  
  export default BaseInput;