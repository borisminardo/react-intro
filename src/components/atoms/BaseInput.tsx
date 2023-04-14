import { MyInputProps } from "../../Interfaces/MyInputProps";
import MyDebuggerObj from "../../shared/MyDebuggerObj";

type InputBaseProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  MyInputProps;

function BaseInput({
  labelname,
  className,
  errormessage,
  type,
  id,
  value,
  placeholder,
  onChange,
  ...otherProps
}: InputBaseProps) {
  let styleText = {};
  if (otherProps.errormessage != "") {
    styleText = { color: "red" };
  }

  return (
    <>
      <label className="label-width" htmlFor={id}>
        {" "}
        {labelname}{" "}
      </label>
      <input
        {...otherProps}
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <p style={styleText}>{errormessage}</p>

      {/*  <MyDebuggerObj className="mt-3" obj={value}></MyDebuggerObj> */}
    </>
  );
}

export default BaseInput;
