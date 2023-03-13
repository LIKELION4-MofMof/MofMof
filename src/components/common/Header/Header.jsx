
import { Logo } from "./Logo";
import { Menu } from "../Menu/Menu";
import { Alarm } from "./Alarm";
import styled from "styled-components";


const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: '#fffff';
  height: 100px;
`

export function Header() {

  return (
    <StyledHeader>
      <Menu />
      <Logo />
      <Alarm />
    </StyledHeader>
  )
}
