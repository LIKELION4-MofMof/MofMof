import { useState } from "react";
import data from "./data";
import MenuList from "./MenuList";


const MenuAccordion = () => {
  const [menuLists, setMenuLists] = useState(data);
  
  return(
    <div>
      <div>
        <section>
          {menuLists.map((menuList) => {
            return <MenuList key={menuList.id} {...menuList}/>
          })}
        </section>
      </div>
    </div>
  )
}

export default MenuAccordion;