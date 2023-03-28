import { useState } from 'react';
import data from 'components/common/Menu/data';
import MenuDropDown from 'components/common/Menu/MenuDropDown';

const MenuList = () => {
  const [menuLists, setMenuLists] = useState(data);

  return (
    <>
      <div>
        <ul>
          {menuLists.map((menuList) => {
            return (
              <li key={menuList.id}>
                <MenuDropDown {...menuList} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MenuList;
