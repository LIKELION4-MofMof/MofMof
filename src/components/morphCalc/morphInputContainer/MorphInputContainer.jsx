import styled from 'styled-components';

const Container = styled.div`
  border: 2px solid orangered;
`


const MorphInputContainer = ({children}) => {

  return (
    <Container>
      <h2>모프 인풋 컨테이너</h2>
      <div>{children}</div>
    </Container>
  );
};

export default MorphInputContainer;