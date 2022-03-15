import styled from "styled-components";
import Button from "components/Button";
import { useEffect, useState } from "react";
import { useTheme } from "hooks/useTheme";

const Header = () => {
  const [themeMode, toggleTheme] = useTheme();
  const [themeTitle, setThemeTitle] = useState(
    themeMode === "light" ? "라이트 모드" : "다크 모드"
  );

  useEffect(() => {
    return setThemeTitle(themeMode === "light" ? "라이트 모드" : "다크 모드");
  }, [themeMode]);

  return (
    <HeadContainer>
      <HeadTitle>Drag and Drop</HeadTitle>
      <Nav>
        <TabList>
          <ListItem>Menu</ListItem>
        </TabList>
        <Button title={themeTitle} click={toggleTheme} />
      </Nav>
    </HeadContainer>
  );
};

export default Header;

const HeadContainer = styled.header`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 60px);
  height: 50px;
  background-color: ${(props) => props.theme.colors.boxColor};
  border-radius: 5px;
  margin: 0 auto;
  padding: 10px;
`;

const HeadTitle = styled.h1`
  line-height: 50px;
  font-size: 20px;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 78%;
`;

const TabList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 90%;
  height: 100%;
  margin: 0;
`;

const ListItem = styled.li`
  width: 100%;
  line-height: 50px;
  text-align: center;
  border: 2px solid #dbdbdb;
  border-radius: 5px;
  margin-right: 10px;
`;
