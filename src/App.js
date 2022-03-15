import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/globalStyle";
import { dark, light } from "styles/theme";
import Header from "components/Header";
import SideBar from "components/SideBar";
import Contents from "components/Contents";
import Footer from "components/Footer";
import { useTheme } from "hooks/useTheme";

function App() {
  const [themeMode] = useTheme();

  const [theme, setTheme] = useState(themeMode === "light" ? light : dark);

  useEffect(() => {
    setTheme(themeMode === "light" ? light : dark);
  }, [themeMode]);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container className="App">
          <Header />
          <Main>
            <SideBar />
            <ContentBoardWrapper>
              <Contents />
            </ContentBoardWrapper>
          </Main>
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.bgColor};
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 40px);
  min-height: 100%;
  padding: 20px;
`;

const ContentBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 78%;
  min-height: 100vh;
  border-radius: 10px;
`;
