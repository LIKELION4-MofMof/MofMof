import React from 'react';
import { DropDownItemBtn } from './MorphInfo.styled';

const MorphListDropDownItem = ({ morph }) => {
  return <DropDownItemBtn type="button">{morph.name}</DropDownItemBtn>;
};

export default MorphListDropDownItem;
