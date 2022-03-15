import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterCopyRight>
        COPYRIGHT © <FooterCopyRightText>WOOJINLEEdev</FooterCopyRightText> All
        Right Reserved.
      </FooterCopyRight>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  width: calc(100% - 60px);
  height: 50px;
  line-height: 50px;
  background-color: ${(props) => props.theme.colors.boxColor};
  border-radius: 5px;
  margin: 0 auto;
  padding: 10px;
`;

const FooterCopyRight = styled.p`
  display: table;
  margin: 0 auto;
`;

const FooterCopyRightText = styled.span`
  padding-right: 5px;
  font-weight: bold;
`;
