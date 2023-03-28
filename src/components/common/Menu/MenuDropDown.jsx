import { useState } from 'react';
import down from 'assets/icon/down.svg';
import up from 'assets/icon/up.svg';
import {
  DropDownBtn,
  GeckoMainMenu,
  MainMenuTitle,
  GeckoSubMenu,
  GeckoMainMenuIcon,
  GeckoMenuListItem,
} from 'components/common/Menu/Menu.styled';
import menuLists from 'components/common/Menu/data';

const MenuDropDown = ({ title, list, icon }) => {
  const GeckoSubMenuList = list.map((item, idx) => (
    <li key={idx}>
      <GeckoMenuListItem>{item}</GeckoMenuListItem>
    </li>
  ));

  const [activeList, setActiveList] = useState(false);
  return (
    <>
      <GeckoMainMenu>
        <span>{icon()}</span>
        <MainMenuTitle>{title}</MainMenuTitle>
        <DropDownBtn
          aria-label="하위 메뉴보기"
          onClick={() => setActiveList(!activeList)}
        >
          {activeList ? <img src={up} /> : <img src={down} />}
        </DropDownBtn>
      </GeckoMainMenu>
      <GeckoSubMenu>{activeList && GeckoSubMenuList}</GeckoSubMenu>
    </>
  );
};

export default MenuDropDown;
