import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  cursor: pointer;
  border: none;
  font-size: 16px;

  &:hover {
    background: #f2f4f7;
  }
`;

const MorphButton = ({ morph, insertSelectedBox }) => {
  const selectMorph = () => {
    insertSelectedBox(morph);
  };

  return <Button onClick={selectMorph}>{morph.korName}</Button>;
};

export default MorphButton;
