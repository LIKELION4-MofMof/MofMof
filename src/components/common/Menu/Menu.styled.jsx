import styled from "styled-components/macro"

import menuIcon from 'assets/icon/menuIcon.svg';
import carrot from 'assets/icon/carrot.svg';

// Menu
export const MenuButton = styled.button`
  background: url(${menuIcon});
  border-style: none;
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 0;
  position: relative;
`

export const HeaderMenu = styled.div`
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

export const Bar = styled.div`
  border-top: 1px solid #ffff;
  margin: 17px 0;
`

export const CloseBtn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`

// MenuDropDown
export const AccordionBtn = styled.button`
  border-style: none;
  background: transparent;
  cursor: pointer;
`

export const AccordionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 50px;
`

export const GeckoList = styled.div`
  display: flex;
  flex-direction: column;
`
export const GeckoListTitle = styled.h4`
  &::before{
    content: "";
    background: url(${carrot});
    width: 24px;
    height: 24px;
    display: inline-block;
    margin-right: 12px;
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
  /* display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center; */
  width: 150px;
`

export const Circle = styled.span`
  display: inline-block;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: #D9D9D9;
`

export const LoginBtn = styled.button`
  border: none;
  background: transparent;
  color: #ffff;
  font-size: 20px;
  font-weight: 500;
  padding: 0;
`
export const LoginIndex = styled.p`
  font-size: 12px;
  display: inline-block;
`