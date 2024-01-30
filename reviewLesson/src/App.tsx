import { styled } from "@linaria/react";
import "./App.css";
import Menu from "./components/header/menu";
import interFont from "./assets/fonts/fonts";
import FormTalk from "./components/form/form";

function App() {
  const Container = styled.div`
    text-decoration: none;
    height: 100vh;
    background-color: white;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;

  const Img = styled.img`
    position: absolute;
    top: 44%;
    left: 48%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-height: 100%;
    z-index: 1;
  `;

  const Title = styled.p`
    font-size: 50px;
    font-family: "Oswald", sans-serif;
    font-weight: 600;
    text-align: left;
    position: absolute;
    top: 15%;
    left: 18.5%;
    transform: translate(-50%, -50%);
    z-index: 2;
  `;

  const Paragraph = styled.p`
    font-size: 20px;
    font-family: ${interFont};
    text-align: left;
    position: absolute;
    top: 22%;
    left: 20.8%;
    transform: translate(-50%, -50%);
    z-index: 2;
  `;
  const FormContainer = styled.div`
    text-align: left;
    position: absolute;
    top: 38%;
    left: 26%;
    transform: translate(-50%, -50%);
    z-index: 2;
    background-color: white;
    height: 20%;
    width: 30%;
    border-radius: 15px;
    padding-top: 0.5%;
  `;

  //fazer container aqui:

  return (
    <>
      <Menu />
      <Container>
        <div>
          <Img src="src/assets/images/imageback.png" alt="" />
        </div>
        <Title>COLABORATION </Title>
        <Paragraph>
          Receive expert advice. Choose a day, a theme <br />
          and a great talk ❤️
        </Paragraph>
        <FormContainer>
          <h2>Enter your mail and a theme</h2>
          <FormTalk></FormTalk>
        </FormContainer>
      </Container>
    </>
  );
}

export default App;
