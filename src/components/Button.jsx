import styled from "styled-components";

const Button = ({ title, click }) => {
  return (
    <ThemeButton onClick={click}>
      <span>{title}</span>
    </ThemeButton>
  );
};

export default Button;

const ThemeButton = styled.button`
  width: 100px;
  height: 50px;
  border: none;
  background-color: ${(props) => props.theme.colors.bgColor};
  color: ${(props) => props.theme.colors.titleColor};

  border-radius: 8px;
  cursor: pointer;

  span {
    font-size: 10px;
    font-weight: bold;
  }
`;
