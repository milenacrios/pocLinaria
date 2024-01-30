import { css } from "@linaria/core";
import { lightGreen, lightPink } from "../../../assets/colors/colors";
import { FormStyledProps } from "./formStyled.types";

export const useStyles = {
  root: css`
    && {
      background-color: ${lightGreen};
      margin-top: 6%;
      width: 30%;
    }
    &&:hover {
      background-color: ${lightGreen};
    }
  `,
  textField: css`
    width: 100%;
    padding-bottom: 2%;

    label {
      font-size: 16px;
      font-weight: 700;
      font-family: "Inter";
    }
    & label.Mui-focused {
      color: ${lightGreen};
    }
    & .MuiOutlinedInput-root {
      &.Mui-focused fieldset {
        border-color: ${lightGreen};
      }
    }
  `,
  divButtons: css`
    display: flex;
    flex-direction: row;
    gap: 4%;
    margin-bottom: 7%;
    && {
      justify-content: end;
    }
  `,
};

export default function ButtonStyled({ typeStyle }: FormStyledProps) {
  if (typeStyle === "talk") {
    return css`
      && {
        background-color: ${lightGreen};
        margin-top: 6%;
        width: 30%;
      }
      &&:hover {
        background-color: ${lightGreen};
      }
    `;
  }
  if (typeStyle === "knowmore") {
    return css`
      && {
        background-color: ${lightPink};
        margin-top: 6%;
        width: 30%;
        color: white;
        border: none;
      }
      &&:hover {
        background-color: ${lightPink};
      }
    `;
  }
}
