import { useState } from 'react';
import down from 'assets/icon/down.svg';
import up from 'assets/icon/up.svg';
import { AccordionBtn, AccordionTitle, GeckoList, GeckoListTitle } from 'components/common/Menu/Menu.styled';


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