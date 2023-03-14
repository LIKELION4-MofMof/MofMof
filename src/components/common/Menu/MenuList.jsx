import { useState } from 'react';
import styled from 'styled-components';


const AccordionBtn = styled.button`
  border-style: none;
  background: transparent;
  cursor: pointer;
`

const AccordionTitle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`



const MenuList = ({title, list}) => {


  const [activeList, setActiveList] = useState(false);
  return (
    <div>
      <AccordionTitle>
        <h4>{title}</h4>
        <AccordionBtn onClick={() => setActiveList(!activeList)}>
          {activeList ? 'close' : 'open'}
        </AccordionBtn>
      </AccordionTitle>
      {activeList && <p>{list}</p>}
    </div>
  )
};

export default MenuList;