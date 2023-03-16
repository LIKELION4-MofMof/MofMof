import styled from 'styled-components';
import { ReactComponent as Search } from '../../../assets/icon/Search.svg';
// import { ReactComponent as ArrowChevron } from '../../../assets/icon/ArrowChevron.svg';
import MorphInput from './MorphInput';

const Container = styled.section`
  ${'' /* border: 2px solid orangered; */}
`;
const InputTitle = styled.div`
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
const InputWrapper = styled.div`
  margin-top: 10px;
  width: 335px;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  border: 1px solid #f26a3b;
  border-radius: 10px;
  padding: 12px 11px;
  gap: 8px;
  .searchIcon {
    transform: translateY(2px);
  }
  .searchInput {
    flex-grow: 1;
    border: none;
  }
  .searchInput::placeholder {
    color: #332ff2;
    font-size: 16px;
  }
  .btnShowMorphList {
    width: 24px;
    height: 24px;
    background: url(../../../assets/icon/ArrowChevron.svg) no-repeat 0 0;
    cursor: pointer;
  }
`;

const MorphInputContainer = ({ children, title }) => {
  const showMorphList = () => {};

  return (
    <Container>
      <InputTitle>
        <h2>{title}</h2>
      </InputTitle>
      <InputWrapper>
        <Search className="searchIcon" />
        <input
          type="text"
          placeholder="아빠를 검색해 보세요."
          className="searchInput"
        />
        <button type="button" className="btnShowMorphList"></button>
      </InputWrapper>
      <div>{children}</div>
    </Container>
  );
};

export default MorphInputContainer;
