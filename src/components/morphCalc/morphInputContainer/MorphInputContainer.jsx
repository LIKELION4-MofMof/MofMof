import { useState } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as Search } from 'assets/icon/search.svg';
import ArrowChevron from 'assets/icon/ArrowChevron.svg';
import MorphListDropBox from './MorphListDropBox';
import SelectedBtn from './SelectedBtn';

const fattailMorph = [
  {
    id: 'fm1',
    engName: 'Normal',
    korName: '노말',
    type: 'dominant',
  },
  {
    id: 'fm2',
    engName: 'Oreo',
    korName: '오레오',
    type: 'recessive',
  },
  {
    id: 'fm3',
    engName: 'Whiteout',
    korName: '화이트아웃',
    type: 'dominant',
  },
  {
    id: 'fm4',
    engName: 'Stripe',
    korName: '스트라이프',
    type: 'dominant',
  },
  {
    id: 'fm5',
    engName: 'Zero',
    korName: '제로',
    type: 'recessive',
  },
  {
    id: 'fm6',
    engName: 'Caramel',
    korName: '카라멜',
    type: 'recessive',
  },
  {
    id: 'fm7',
    engName: 'Ghost',
    korName: '고스트',
    type: 'recessive',
  },
];

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
    background: url(${ArrowChevron}) no-repeat 0 0 / cover;
    cursor: pointer;
    border: none;
  }
  ${(props) =>
    (props.showDropBox || props.filterDropBox) &&
    css`
      border-radius: 10px 10px 0 0px;
    `}
`;
const SelectedBox = styled.ul`
  border: 2px dashed #f26a3b;
  border-radius: 10px;
  margin-top: 88px;
  width: 335px;
  height: 90px;
  padding: 11px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
`;

const MorphInputContainer = ({ title }) => {
  const [showDropBox, setShowDropBox] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [filterDropBox, setFilterDropbox] = useState(false);
  const [morphList, setMorphList] = useState([]);
  const [selectedMorph, setSelectedMorph] = useState([]);

  const toggleMorphList = () => {
    setShowDropBox(!showDropBox);
  };
  const changeDropBox = (boolean) => {
    setShowDropBox(!boolean);
  };
  const changeInputValue = (e) => {
    setInputValue(e.target.value);
    if (e.target.value !== '') {
      const filterMorph = fattailMorph.filter((morph) =>
        morph.korName.includes(inputValue),
      );
      changeDropBox(true);
      setFilterDropbox(true);
      setMorphList(filterMorph);
    }
    console.log(inputValue);
  };
  const insertSelectedBox = (newSelectedMorph) => {
    setSelectedMorph(selectedMorph.concat(newSelectedMorph));
  };

  return (
    <section>
      <InputTitle>
        <h2>{title}</h2>
      </InputTitle>
      <InputWrapper showDropBox={showDropBox} filterDropBox={filterDropBox}>
        <Search className="searchIcon" />
        <input
          type="text"
          placeholder={`${title}를 검색해보세요.`}
          className="searchInput"
          value={inputValue}
          onChange={changeInputValue}
        />
        <button
          type="button"
          className="btnShowMorphList"
          onClick={toggleMorphList}
        ></button>
      </InputWrapper>
      {showDropBox && (
        <MorphListDropBox
          morphList={fattailMorph}
          insertSelectedBox={insertSelectedBox}
        />
      )}
      {filterDropBox && (
        <MorphListDropBox
          morphList={morphList}
          insertSelectedBox={insertSelectedBox}
        />
      )}
      <SelectedBox>
        {selectedMorph.map((morph) => (
          <li key={morph.id}>
            <SelectedBtn morph={morph} />
          </li>
        ))}
      </SelectedBox>
    </section>
  );
};

export default MorphInputContainer;
