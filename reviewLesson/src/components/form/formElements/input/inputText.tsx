import { TextField } from "@mui/material";
import { InputProps } from "./input.types";
import { useStyles } from "../../style/formStyled";
export function something(value: any) {
  console.log(JSON.stringify(value));
}

export function InputText({
  textLabel,
  textPlaceholder,
  inputName,
  onChangeEvent,
}: InputProps) {
  return (
    <TextField
      label={textLabel}
      placeholder={textPlaceholder}
      name={inputName}
      className={useStyles.textField}
      onChange={onChangeEvent}
    />
  );
}
