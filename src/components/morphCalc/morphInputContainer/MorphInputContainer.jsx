import styled from 'styled-components';
import { ReactComponent as Search } from '../../../assets/icon/Search.svg';

const Container = styled.section`
  ${'' /* border: 2px solid orangered; */}
`;
const InputTitle = styled.h2`
  width: 335px;
  height: 30px;
  background: #f26a3b;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
  }
`;

const MorphInputContainer = ({ children, title }) => {
  return (
    <Container>
      <InputTitle>
        <h2>{title}</h2>
      </InputTitle>
      <div>
        <Search />
      </div>
      <div>{children}</div>
    </Container>
  );
};

export default MorphInputContainer;
