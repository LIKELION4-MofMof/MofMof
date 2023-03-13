import styled from "styled-components";
import MorphInputBox from "./MorphInputBox";
import MorphInputList from "./MorphInputList";

const Container = styled.div`
  border: 2px solid orangered;
  padding: 0.5rem;
`


const MorphInputContainer = () => {
  return (
    <Container>
      <MorphInputBox />
      <MorphInputList />
    </Container>
  );
};

export default MorphInputContainer;