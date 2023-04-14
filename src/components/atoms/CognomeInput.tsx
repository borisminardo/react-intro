import { InputBaseProps, MyInputProps } from "../../Interfaces/MyInputProps";
import BaseInput from "./BaseInput";
import TextInputAZ from "./TextInputAZ";

function CognomeInput({
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
        value={TextInputAZ.validaTesto(value, { pattern: /[A-Z]$/ })}
        placeholder={placeholder}
        errormessage={errormessage}
        onChange={onChange}
      />
    </>
  );
}

export default CognomeInput;
