import { useState } from 'react';
import { ReactComponent as Search } from 'assets/icon/search.svg';
import MorphListDropBox from './MorphListDropBox';
import SelectedBtn from './SelectedBtn';
import {
  InputTitle,
  InputWrapper,
  SelectedBox,
} from './MorphInputContainer.styled';

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
