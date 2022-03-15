import { useState } from "react";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const SideBar = () => {
  const content = [
    { id: "1", title: "축구" },
    { id: "2", title: "농구" },
    { id: "3", title: "야구" },
    { id: "4", title: "배구" },
    { id: "5", title: "족구" },
  ];
  const [exercise, setExercise] = useState(content);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    console.log(result);
    const items = [...exercise];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setExercise(items);
  };
  return (
    <SideBarContainer>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="exercise">
          {(provided, snapshot) => (
            <Ul
              ref={provided.innerRef}
              className={snapshot.isDraggingOver && "draggingOver"}
              isDraggingOver={snapshot.isDraggingOver}
              {...provided.droppableProps}
            >
              {exercise.map(({ id, title }, index) => (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided, snapshot) => (
                    <Li
                      ref={provided.innerRef}
                      className={snapshot.isDragging && "dragging"}
                      isDragging={snapshot.isDragging}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    >
                      {title}
                    </Li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Ul>
          )}
        </Droppable>
      </DragDropContext>
    </SideBarContainer>
  );
};

export default SideBar;

const SideBarContainer = styled.aside`
  width: 20%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.boxColor};
  border-radius: 10px;
`;

const Ul = styled.ul`
  width: 80%;
  margin: 20px auto;
  font-weight: bold;
  border-radius: 5px;
`;

const Li = styled.li`
  padding: 20px;
  background-color: ${(props) => (props.isDragging ? "#fff" : "transparent")};
  color: ${(props) => (props.isDragging ? "#008000" : "#333")};
  border: 2px solid #dbdbdb;
  border-radius: 5px;
  margin: 10px 0;
  text-align: center;
  user-select: none;
`;
