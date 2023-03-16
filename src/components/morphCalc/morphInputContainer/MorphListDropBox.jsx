import styled from 'styled-components';
import MorphButton from './MorphButton';

const ButtonUl = styled.ul`
  width: 335px;
  height: 95px;
  border: 1px solid #f26a3b;
  overflow: auto;
  padding: 11px;
  position: absolute;
  z-index: 2;
  background: #ffffff;
`;

const MorphListDropBox = ({ morphList, insertSelectedBox }) => {
  return (
    <ButtonUl>
      {morphList.map((morph) => (
        <li key={morph.id}>
          <MorphButton morph={morph} insertSelectedBox={insertSelectedBox} />
        </li>
      ))}
    </ButtonUl>
  );
};

export default MorphListDropBox;
