import { InputBaseProps, MyInputProps } from "../../Interfaces/MyInputProps";
import BaseInput from "./BaseInput";

function TelefonoInput({
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
}: InputBaseProps & MyInputProps) {
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

export default TelefonoInput;
