import styled from "styled-components";

const MorphList = styled.ul`
  border: 1px solid gray;
`
const Button = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  cursor: pointer;
  border: none;

  &:hover {
    background: #f2f4f7;
  }
`

const MorphInputList = () => {
  return (
    <MorphList>
      <li>
        <Button type="button">노멀</Button>
      </li>
      <li>
        <Button type="button">오레오</Button>
      </li>
    </MorphList>
  );
};

export default MorphInputList;