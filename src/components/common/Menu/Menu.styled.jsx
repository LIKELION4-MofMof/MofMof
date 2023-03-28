import styled from "styled-components/macro"

import menuIcon from 'assets/icon/menuIcon.svg';
import right from "assets/icon/right.svg";
import userProfile from 'assets/icon/userProfile.svg';

// Menu
export const MenuWrapper = styled.div`
  position: relative;
  
`
export const MenuButton = styled.button`
  background: url(${menuIcon});
  width: 24px;
  height: 24px;
  padding: 0;
`

export const HeaderMenu = styled.div`
  display: ${(props) => (props.toggleMenu ? "block" : "none")};
  flex-direction: column;
  align-items: center;
  width: 287px;
  height: 100vh;
  background: #FF5500;
  position: fixed;
  margin: 0 auto;
  top: -37px;
  left: -20px;
  position: relative;
  position: absolute;
  color: #ffff;
`



export const Bar = styled.div`
  border-top: 1px solid #ffff;
  width: 245px;
  margin: 0 auto 33px;
`

export const CloseBtn = styled.button`
  position: absolute;
  right: 10px;
  top: 30px;
  padding: 10px 10px;
  width: 42px;
  height: 42px;
`

export const UserMenu = styled.ul`
  color: #ffff;
`


export const UserMenuList = styled.li`
  display: flex;
  gap: 12px;
  align-items: center;
  margin: 0 0 34px 33px;
` 

export const UserMenuBtn = styled.button`
  font-weight: 500;
  font-size: 20px;
  color: #ffff;
`

// MenuDropDown
export const GeckoMainMenu = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px 34px 33px;
  gap: 12px;
  /* padding: 0 20px 0 0; */
  font-weight: 500;
  width: 236px;
`

export const DropDownBtn = styled.button`
  /* margin-left: 120px; */
  padding: 0;
  height: 24px;
`


export const GeckoSubMenu = styled.ul`
  display: flex;
  flex-direction: column;
`


export const MainMenuTitle = styled.button`
  color: #ffff;
  font-weight: 500;
  font-size: 20px;
  color: #ffff;
  flex-grow: 1;
  text-align: left;
`

export const GeckoMenuListItem = styled.button`
  color: #DEDEDE;
  margin-bottom: 33px;
  margin-left: 70px;
  display: flex;
  font-size: 16px;
  :hover{
    font-weight: 800;
  }
`

//Greeting
export const LoginRegister = styled.section`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 25px 0 ;
  padding: 0 20px;
`

export const LoginWrapper = styled.div`
  width: 157px;
`

export const UserProfile = styled.span`
  display: inline-block;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  /* background: url(${userProfile}); */
  background: #DEDEDE;
`

export const LoginBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 161px;
  margin-bottom: 11px;
  text-align: left;
`

export const LoginBtn = styled.button`
  color: #ffff;
  font-size: 20px;
  font-weight: 500;
  padding: 0;
  font-size: 20px;
`

export const LoginBtnIcon = styled.span`
  background: url(${right}) no-repeat;
  display: inline-block;
  width: 10px;
  height: 18px;
`


export const LoginIndex = styled.p`
  font-size: 12px;
  display: inline-block;
  width: 144px;
`

export const UserMenuIcon = styled.img`
  width: 24px;
  height: 24px;
  display: inline-block;
`