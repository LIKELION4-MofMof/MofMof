import React from 'react';
import { MorphListDropDownUl } from './MorphInfo.styled';
import MorphListDropDownItem from './MorphListDropDownItem';

const MorphListDropDown = ({ morphList }) => {
  return (
    <MorphListDropDownUl>
      {morphList.map((morph) => (
        <li key={morph.id}>
          <MorphListDropDownItem morph={morph} />
        </li>
      ))}
    </MorphListDropDownUl>
  );
};

export default MorphListDropDown;
