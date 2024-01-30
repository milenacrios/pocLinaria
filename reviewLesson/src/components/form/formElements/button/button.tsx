import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ButtonStyled from "../../style/formStyled";
import { ButtonProps } from "./button.types";
import Alert from "@mui/material/Alert";
import { useState } from "react";
export const IconButton = ({ iconButtonStyle }: any) => {
  if (iconButtonStyle === "talk") {
    return <CheckIcon />;
  }
  if (iconButtonStyle === "knowmore") {
    return <MoreHorizIcon />;
  }
};
export default function ButtonForm({
  textButton,
  buttonStyle,
  iconButtonSend,
  onClickButton,
}: ButtonProps) {
  return (
    <>
      <Button
        variant="contained"
        className={ButtonStyled({ typeStyle: buttonStyle })}
        startIcon={IconButton({ iconButtonStyle: iconButtonSend })}
        onClick={onClickButton}
      >
        {textButton}
      </Button>
    </>
  );
}
