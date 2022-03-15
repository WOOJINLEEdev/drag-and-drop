import styled from "styled-components";

const Board = () => {
  return <BoardContainer></BoardContainer>;
};

export default Board;

const BoardContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.boxColor};
  border-radius: 10px;
  margin-top: 20px;
`;
