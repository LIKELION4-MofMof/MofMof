
import styled from "styled-components";
import { Logo } from "./Logo";
import { Menu } from "../Menu/Menu";
import { Notification } from "./Notification";


const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* background: '#fffff'; */
  background: pink;
  height: 70px;
  padding: 0 20px;
`

export function Header() {

  return (
    <StyledHeader>
      <Menu />
      <Logo />
      <Notification />
    </StyledHeader>
  )
}
