import React, { useState } from 'react';
import MorphButtonList from './morphInputContainer/MorphButtonList';
import MorphInput from './morphInputContainer/MorphInput';
import MorphInputContainer from './morphInputContainer/MorphInputContainer';

const fattailMorph = [
  {
    "engName" : "Normal",
    "korName" : "노말",
    "type" : "dominant"
  },
  {
    "engName" : "Oreo",
    "korName" : "오레오",
    "type" : "recessive"
  },
  {
    "engName" : "Whiteout",
    "korName" : "화이트아웃",
    "type" : "dominant"
  },
  {
    "engName" : "Stripe",
    "korName" : "스트라이프",
    "type" : "dominant"
  },
  {
    "engName" : "Zero",
    "korName" : "제로",
    "type" : "recessive"
  },
  {
    "engName" : "Caramel",
    "korName" : "카라멜",
    "type" : "recessive"
  },
  {
    "engName" : "Ghost",
    "korName" : "고스트",
    "type" : "recessive"
  }

]

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