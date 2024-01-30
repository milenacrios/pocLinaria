import { styled } from "@linaria/react";
import { useStyles } from "./style/formStyled";
import CheckIcon from "@mui/icons-material/Check";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import pt from "date-fns/locale/pt-BR";
import ButtonForm from "./formElements/button/button";
import { useEffect, useState } from "react";
import { Alert, TextField } from "@mui/material";
import { InputText } from "./formElements/input/inputText";
import lightGreen from "@mui/material/colors/lightGreen";

export default function FormTalk() {
  const [showAlert, setShowAlert] = useState(false);
  const [email, setEmail] = useState("");
  const [theme, setTheme] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    useEffect(() => {
      setEmail(event.target.value);
    }, [email]);
  };
  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    useEffect(() => {
      setTheme(event.target.value);
    }, [theme]);
  };

  const handleButtonClick = () => {
    localStorage.setItem("email", email);
    localStorage.setItem("theme", theme);
    console.log(email);
    console.log(theme);
    setShowAlert(true);
    const duration = 3000;
    setTimeout(() => {
      setShowAlert(false);
    }, duration);
  };
  const Form = styled.form`
    margin-top: 3%;
    & > * {
      margin-bottom: 3%;
    }
  `;
  const TexField = styled(TextField)`
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
  `;
  return (
    <>
      {showAlert && (
        <Alert
          icon={<CheckIcon fontSize="inherit" />}
          severity="success"
          onClose={() => setShowAlert(false)}
        >
          Appointment made successfully. More information in your email
        </Alert>
      )}
      <Form>
        <InputText
          textLabel="Insert a mail"
          textPlaceholder="test@mail.com"
          inputName="email"
          onChangeEvent={handleEmailChange}
        />
        <InputText
          textLabel="Insert a theme"
          textPlaceholder="computer science"
          inputName="theme"
          onChangeEvent={handleThemeChange}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={pt}>
          <DatePicker
            className={useStyles.textField}
            label="Insert new date"
            views={["year", "month", "day"]}
            slotProps={{
              actionBar: {
                actions: ["today"],
              },
            }}
          />
        </LocalizationProvider>

        <div className={useStyles.divButtons}>
          <ButtonForm
            textButton="To schedule"
            buttonStyle="talk"
            iconButtonSend="talk"
            onClickButton={() => handleButtonClick()}
          />
          <ButtonForm
            textButton="Know more"
            buttonStyle="knowmore"
            iconButtonSend="knowmore"
            onClickButton={() => handleButtonClick()}
          />
        </div>
      </Form>
    </>
  );
}
