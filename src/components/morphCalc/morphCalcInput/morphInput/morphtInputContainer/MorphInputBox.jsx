import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  ${'' /* box-sizing: border-box; */}
  border: 1px solid orangered;
  border-radius: 5px;
`

const MorphInputBox = () => {
  return (
    <div>
      <Input type="text" placeholder="아빠 모프를 입력해주세요." />
    </div>
  );
};

export default MorphInputBox;