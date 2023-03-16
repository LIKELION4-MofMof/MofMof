import { useState } from 'react';
import styled from 'styled-components';
import down from '../../../assets/icon/down.svg'
import up from '../../../assets/icon/up.svg'
import carrot from "../../../assets/icon/carrot.svg"

const AccordionBtn = styled.button`
  border-style: none;
  background: transparent;
  cursor: pointer;
`

const AccordionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
`

const GeckoList = styled.div`
  display: flex;
  flex-direction: column;
`
const GeckoListTitle = styled.h4`
  &::before{
    content: "";
    background: url(${carrot});
    width: 24px;
    height: 24px;
    background-size: 24px;
    display: inline-block;
  }
`


const MenuDropDown = ({title, list}) => {


  const [activeList, setActiveList] = useState(false);
  return (
    <>
      <AccordionTitle>
        <GeckoListTitle>{title}</GeckoListTitle>
        <AccordionBtn onClick={() => setActiveList(!activeList)}>
          {activeList ? <img src={up} /> : <img src={down} />}
        </AccordionBtn>
      </AccordionTitle>
      <GeckoList>
        {activeList && <li>{list}</li>}
      </GeckoList>  
    </>
  )
};

export default MenuDropDown;