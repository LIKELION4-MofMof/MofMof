import styled, { keyframes } from "styled-components/macro"

import menuIcon from 'assets/icon/menuIcon.svg';
import carrot from 'assets/icon/carrot.svg';
import right from "assets/icon/right.svg";
// Menu
export const MenuWrapper = styled.div`
  position: relative;
`
export const MenuButton = styled.button`
  background: url(${menuIcon});
  border-style: none;
  cursor: pointer;
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
  background: #F26A3B;
  position: fixed;
  margin: 0 auto;
  border-radius: 0 0 0 10px;
  z-index: 10;
  top: -21px;
  left: -20px;
  position: relative;
  position: absolute;
  color: #ffff;
`



export const Bar = styled.div`
  border-top: 1px solid #ffff;
  width: 245px;
  margin: 17px auto;
`

export const CloseBtn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 10px;


`
export const UserMenu = styled.ul`
  color: white;
`


export const UserMenuList = styled.li`
  display: flex;
  gap: 12px;
  align-items: center;
  margin: 0 0 34px 33px;
` 

// MenuDropDown
export const GeckoMainMenu = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 34px 33px;
  gap: 12px;
  padding: 0 20px 0 0;
  font-weight: 500;
`

export const DropDownBtn = styled.button`
  border-style: none;
  background: transparent;
  cursor: pointer;
  margin-left: 120px;
  padding: 0;
  height: 24px;
`


export const GeckoSubMenu = styled.ul`
  display: flex;
  flex-direction: column;
`

export const GeckoMainMenuIcon = styled.span`
    content: "";
    background: url(${carrot});
    width: 24px;
    height: 24px;
    display: inline-block;
`

export const GeckoMainMenuTitle = styled.h4`
  /* width: 50px; */
`

export const GeckoMenuListItem = styled.li`
  color: #DEDEDE;
  margin-bottom: 33px;
  margin-left: 70px;
  display: flex;
  flex-direction: column;
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

export const Circle = styled.span`
  display: inline-block;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: #D9D9D9;
`

export const LoginBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 157px;
  margin-bottom: 11px;
`

export const LoginBtn = styled.button`
  border: none;
  background: transparent;
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