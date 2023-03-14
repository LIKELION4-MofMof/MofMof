import styled from "styled-components";



const Input = styled.input`
  width: 100%;
  ${'' /* box-sizing: border-box; */}
  border: 1px solid orangered;
  border-radius: 5px;
`


const MorphInput = ({showButtonList}) => {
  return (
    <div>
      <h2> 모프 입력</h2>
      <Input type="text" placeholder="아빠 도마뱀의 모프를 입력해주세요." onClick={showButtonList} />
    </div>
  );
};

export default MorphInput;