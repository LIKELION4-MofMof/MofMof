import { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  border: 1px solid orangered;
  border-radius: 5px;
`;

const MorphInput = ({
  showDropDownMorphList,
  fattailMorph,
  filterDropDownMorphList,
}) => {
  const [inputValue, setInputValue] = useState('');

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
    if (inputValue !== '') {
      const filterMorph = fattailMorph.filter((morph) =>
        morph.korName.includes(inputValue),
      );
      filterDropDownMorphList(filterMorph);
    }
  };

  return (
    <div>
      <h2> 모프 입력</h2>
      <Input
        type="text"
        placeholder="아빠 도마뱀의 모프를 입력해주세요."
        onClick={showDropDownMorphList}
        value={inputValue}
        onChange={changeInputValue}
      />
    </div>
  );
};

export default MorphInput;
