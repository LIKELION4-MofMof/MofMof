import { useState } from "react";
import {styled} from 'styled-components';
import data from "./data";
import MenuDropDown from "./MenuDropDown";






const MenuList = () => {
  const [menuLists, setMenuLists] = useState(data);
  
  return(
    <>
      <div>
        <ul>
          {menuLists.map((menuList) => {
            return <li><MenuDropDown key={menuList.id} {...menuList}/></li>
          })}
        </ul>
      </div> 
    </>
    
  )
}

export default MenuList;