import { MyInputProps } from "../../Interfaces/MyInputProps";
import BaseInput from "./BaseInput";

type InputBaseProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  MyInputProps;

function EmailInput({
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
  return (
    <>
      <BaseInput
        {...otherProps}
        labelname={labelname}
        type={type}
        id={id}
        className={className}
        value={value}
        placeholder={placeholder}
        error={error}
        errormessage={errormessage}
        onChange={onChange}
      />
    </>
  );
}

export default EmailInput;
