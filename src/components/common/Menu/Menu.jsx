import { useState, useRef, useEffect } from 'react';
import Logo from 'components/common/Header/Logo';
import MenuList from './MenuList';
import { Greeting } from 'components/common/Menu/Greeting';
import {
  MenuWrapper,
  HeaderMenu,
  MenuButton,
  Bar,
  CloseBtn,
  MainMenuTitle,
  UserMenu,
  UserMenuList,
  UserMenuIcon,
} from './Menu.styled';
import { ReactComponent as CloseIcon } from 'assets/icon/close.svg';
import customer from 'assets/icon/customer.svg';
import logOut from 'assets/icon/logOut.svg';
import setting from 'assets/icon/setting.svg';
import { useSignOut } from 'firebase-db/auth-db/index';

const Menu = ({ children, ...restProps }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuRef = useRef();
  const { signOut } = useSignOut();

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

  const clickMenuOutside = (e) => {
    if (CloseBtn && !menuRef.current.contains(e.target)) setToggleMenu();
  };



  const handleSignOut = async () => {
    console.log('로그아웃');
    signOut();
  };

  return (
    <MenuWrapper>
      <MenuButton
        type="button"
        onClick={toggleChange}
        aria-label="메뉴"
      ></MenuButton>
      <HeaderMenu toggleMenu={toggleMenu} ref={menuRef}>
        <Logo fill="#ffff" />
        <CloseBtn aria-label="닫기" onClick={() => setToggleMenu(false)}>
          <CloseIcon fill="#ffff" />
        </CloseBtn>
        <Greeting />
        <Bar />
        <MenuList />
        <Bar />
        <div>
          <UserMenu>
            <UserMenuList>
              <UserMenuIcon src={customer} alt="고객지원 아이콘" />
              <MainMenuTitle>고객지원</MainMenuTitle>
            </UserMenuList>
            <UserMenuList>
              <UserMenuIcon src={setting} alt="설정 아이콘" />
              <MainMenuTitle>설정</MainMenuTitle>
            </UserMenuList>
            <UserMenuList>
              <UserMenuIcon src={logOut} alt="로그아웃 아이콘" />
              <MainMenuTitle onClick={handleSignOut}>로그아웃</MainMenuTitle>
            </UserMenuList>
          </UserMenu>
        </div>
      </HeaderMenu>
    </MenuWrapper>
  );
};

export default Menu;
