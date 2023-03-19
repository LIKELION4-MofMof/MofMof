import { useState } from 'react';
import down from 'assets/icon/down.svg';
import up from 'assets/icon/up.svg';
import { DropDownBtn, GeckoMainMenu, GeckoMainMenuTitle, GeckoSubMenu, GeckoMainMenuIcon, GeckoMenuListItem } from 'components/common/Menu/Menu.styled';
import menuLists from "components/common/Menu/data"


const MenuDropDown = ({title, list}) => {

  const GeckoSubMenuList = menuLists.map((menuList, idx) =>
    <>
        <GeckoMenuListItem key={menuList.idex}>{menuList.list[idx]}</GeckoMenuListItem>
    </>
)


  const [activeList, setActiveList] = useState(false);
  return (
    <>
      <GeckoMainMenu>
        <GeckoMainMenuIcon></GeckoMainMenuIcon>
        <GeckoMainMenuTitle>{title}</GeckoMainMenuTitle>
        <DropDownBtn onClick={() => setActiveList(!activeList)}>
          {activeList ? <img src={up} /> : <img src={down} />}
        </DropDownBtn>
      </GeckoMainMenu>
      <GeckoSubMenu>
        {activeList && GeckoSubMenuList}
      </GeckoSubMenu>  
    </>
  )
};

export default MenuDropDown;