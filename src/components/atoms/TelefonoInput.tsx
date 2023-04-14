import { InputBaseProps, MyInputProps } from "../../Interfaces/MyInputProps";
import BaseInput from "./BaseInput";
import OnlyNumberInput from "../../shared/OnlyNumberInput";

function TelefonoInput({
  labelname,
  className,
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
        value={OnlyNumberInput.valida(value)}
        placeholder={placeholder}
        errormessage={errormessage}
        onChange={onChange}
      />
    </>
  );
}

export default TelefonoInput;
