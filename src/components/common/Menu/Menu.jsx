import { useState, useRef, useEffect } from "react";
import { Logo } from '../Header/Logo';
import MenuList from './MenuList';
import { Greeting } from "./Greeting";
import styled from "styled-components";
import close from "../../../assets/icon/close.svg";
import menuIcon from "../../../assets/icon/menuIcon.svg";


const MenuButton = styled.button`
  background: url(${menuIcon});
  border-style: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 0;
  position: relative;
`

const HeaderMenu = styled.div`
  display: ${(props) => (props.toggleMenu ? "block" : "none")};
  flex-direction: column;
  align-items: center;
  width: 287px;
  height: 100%;
  background: #F26A3B;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 102px;
  position: absolute;
  color: #ffff;
`

const Bar = styled.div`
  border-top: 1px solid #ffff;
  margin: 17px 0;
`

const CloseBtn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`


export const Menu = ({children, ...restProps}) => {
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
          <Logo color="#ffff" />
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