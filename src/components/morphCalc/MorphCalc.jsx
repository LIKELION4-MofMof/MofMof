import React, { useState } from 'react';
import MorphButtonList from './morphInputContainer/MorphButtonList';
import MorphInput from './morphInputContainer/MorphInput';
import MorphInputContainer from './morphInputContainer/MorphInputContainer';

const fattailMorph = [
  {
    id : "fm1",
    engName : "Normal",
    korName : "노말",
    type : "dominant"
  },
  {
    id : "fm2",
    engName : "Oreo",
    korName : "오레오",
    type : "recessive"
  },
  {
    id : "fm3",
    engName : "Whiteout",
    korName : "화이트아웃",
    type : "dominant"
  },
  {
    id : "fm4",
    engName : "Stripe",
    korName : "스트라이프",
    type : "dominant"
  },
  {
    id : "fm5",
    engName : "Zero",
    korName : "제로",
    type : "recessive"
  },
  {
    id : "fm6",
    engName : "Caramel",
    korName : "카라멜",
    type : "recessive"
  },
  {
    id : "fm7",
    engName : "Ghost",
    korName : "고스트",
    type : "recessive"
  }
];

const MorphCalc = () => {
  const [morphList, setMorphList] = useState([]);

  const showButtonList = () => {
    setMorphList(fattailMorph);
  }

  return (
    <div>
      <h2>모프계산기</h2>
      <MorphInputContainer>
        <MorphInput showButtonList={showButtonList}/>
        <MorphButtonList morphList={morphList}/>
      </MorphInputContainer>

    </div>
  );
};

export default MorphCalc;