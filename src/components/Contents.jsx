import { useState, useRef } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";

const Contents = () => {
  const nodeRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(false);

  const onDrag = (data) => {
    setPosition({ x: data.x, y: data.y });
  };

  const handleDragStart = () => {
    setOpacity(true);
  };

  const handleDragEnd = () => {
    setOpacity(false);
  };

  return (
    <Draggable
      nodeRef={nodeRef}
      position={null}
      defaultPosition={{ x: 0, y: 0 }}
      scale={1}
      onDrag={(e, data) => onDrag(data)}
      onStart={handleDragStart}
      onStop={handleDragEnd}
    >
      <ContentsContainer style={{ opacity: opacity ? "0.5" : "1" }}>
        <Item>
          <div className="item_position">
            x: {position.x.toFixed(0)}, y: {position.y.toFixed(0)}
          </div>
        </Item>
      </ContentsContainer>
    </Draggable>
  );
};

export default Contents;

const ContentsContainer = styled.div`
  width: calc(100% - 20px);
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.boxColor};
  border-radius: 10px;
  padding: 10px;
  cursor: move;
`;

const Item = styled.div`
  position: absolute;
  width: 200px;
  padding: 1em;
  margin: auto;
  background: lightgrey;
  border-radius: 5px;
  color: black;
  user-select: none;
  text-align: center;
`;
