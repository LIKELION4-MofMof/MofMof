import { useState, useRef, useEffect } from "react";
import Logo from 'components/common/Header/Logo';

import { Greeting } from "components/common/Menu/Greeting";
import close from "assets/icon/close.svg";
import { HeaderMenu, MenuButton, Bar, CloseBtn } from "./Menu.styled"
import MenuList from './MenuList';


const Menu = ({children, ...restProps}) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuRef = useRef();

  const toggleChange = (e) => {
    e.stopPropagation();
    setToggleMenu(!toggleMenu);
  };

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
    <>
        <MenuButton type="button" onClick={toggleChange}>
          {/* {<img src={menuIcon} alt={children} {...restProps}/>} */}
        </MenuButton>
        <HeaderMenu toggleMenu={toggleMenu} ref={menuRef} >
          {/* <Logo color="#ffff" /> */}
          <CloseBtn onClick={() => setToggleMenu(false)}><img src={close} /></CloseBtn>
          <Greeting />
          <Bar/>
          <MenuList />
          <Bar />
          <div>
            <ul>
              <li>고객지원</li>
              <li>설정</li>
              <li>로그아웃</li>
            </ul>
          </div>
        </HeaderMenu>
    </>
  )
}

export default Menu;