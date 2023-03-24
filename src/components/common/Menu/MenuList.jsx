import { useState } from "react";
import data from "components/common/Menu/data";
import MenuDropDown from "components/common/Menu/MenuDropDown";



const MenuList = () => {
  const [menuLists, setMenuLists] = useState(data);
  
  return(
    <>
      <div>
        <ul>
          {menuLists.map((menuList, idx) => {
            return <li><MenuDropDown key={menuList.idx} {...menuList}/></li>
          })}
        </ul>
      </div> 
    </>
    
  )
}

export default MenuList;