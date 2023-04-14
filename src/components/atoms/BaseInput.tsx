import { MyInputProps } from "../../Interfaces/MyInputProps";

type InputBaseProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  MyInputProps;

function BaseInput({
  labelname,
  className,
  error,
  errormessage,
  type,
  id,
  value,
  placeholder,
  onChange,
  ...otherProps
}: InputBaseProps) {
  console.log({ ...otherProps });

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
    </>
  );
}

export default BaseInput;
