import styled from 'styled-components';
import close from 'assets/icon/close.svg';

const SelectedBtnContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 3px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px 8px;
  span {
    font-size: 12px;
  }
`;
const SelectedBtnClose = styled.button`
  background: url(${close}) no-repeat 0 0 / cover;
  width: 20px;
  height: 20px;
  border: none;
`;

const SelectedBtn = ({ morph }) => {
  return (
    <SelectedBtnContainer>
      <span>{morph.korName}</span>
      <SelectedBtnClose type="button"></SelectedBtnClose>
    </SelectedBtnContainer>
  );
};

export default SelectedBtn;
