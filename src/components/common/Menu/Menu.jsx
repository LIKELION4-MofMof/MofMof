import { useState, useRef, useEffect } from "react";
import Logo from 'components/common/Header/Logo';

import { Greeting } from "components/common/Menu/Greeting";
import close from "assets/icon/close.svg";
import { MenuWrapper, HeaderMenu, MenuButton, Bar, CloseBtn, MainMenuTitle, UserMenu, UserMenuList, GeckoMainMenuIcon } from "./Menu.styled"
import MenuList from './MenuList';



const Menu = ({children, ...restProps}) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuRef = useRef();

  //menu toggle
  const toggleChange = (e) => {
    e.stopPropagation();
    setToggleMenu(!toggleMenu);
  };

  //menu 외부 영역 클릭시 메뉴 닫기
  useEffect(() => {
    document.addEventListener('mousedown', clickMenuOutside);
    return () => {
      document.removeEventListener('mousedown', clickMenuOutside);
    };
  });

  const clickMenuOutside = e => {
    if (CloseBtn && !menuRef.current.contains(e.target))
    setToggleMenu();
  }

  return (
    <MenuWrapper>
      <MenuButton type="button" onClick={toggleChange} aria-label="메뉴">
        {/* {<img src={menuIcon} alt={children} {...restProps}/>} */}
      </MenuButton>
      <HeaderMenu toggleMenu={toggleMenu} ref={menuRef} >
        <Logo fill="#ffff" />
        <CloseBtn aria-label="닫기" onClick={() => setToggleMenu(false)}><img src={close} /></CloseBtn>
        <Greeting />
        <Bar/>
        <MenuList />
        <Bar />
        <div>
          <UserMenu>
            <UserMenuList><GeckoMainMenuIcon /><MainMenuTitle>고객지원</MainMenuTitle></UserMenuList>
            <UserMenuList><GeckoMainMenuIcon /><MainMenuTitle>설정</MainMenuTitle></UserMenuList>
            <UserMenuList><GeckoMainMenuIcon /><MainMenuTitle>로그아웃</MainMenuTitle></UserMenuList>
          </UserMenu>
        </div>
      </HeaderMenu>
    </MenuWrapper>
  )
}

export default Menu;