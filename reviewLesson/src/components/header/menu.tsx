import { styled } from "@linaria/react";
import interFont from "../../assets/fonts/fonts";
import { dark } from "../../assets/colors/colors";

function Menu() {
  const Title = styled.h2`
    color: ${dark};
    font-size: 32px;
    font-family: ${interFont};
    padding-left: 83px;
  `;

  const Header = styled.header`
    display: flex;
    height: 137px;
    justify-content: space-between;
    align-items: center;
    padding-top: 1%;
    background-color: #ffffff;
  `;

  const Ul = styled.ul`
    list-style: none;
    text-align: right;
    display: flex;
    margin-right: 75px;
    gap: 20px;
  `;

  const Li = styled.li``;
  const A = styled.a`
    text-decoration: none;
    color: ${dark};
    font-weight: 600;
    font-family: ${interFont};
    font-size: 16px;
  `;
  return (
    <>
      <Header>
        <Title>Mageran</Title>
        <Ul>
          <Li>
            {" "}
            <A href="">About</A>
          </Li>
          <Li>
            {" "}
            <A href="">Contact</A>
          </Li>
          <Li>
            {" "}
            <A href="">Follow us</A>
          </Li>
        </Ul>
      </Header>
    </>
  );
}

export default Menu;
