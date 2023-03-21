
import { StyledHeader } from "./Header.styled";
import Logo from "components/common/Header/Logo";
import Menu from "components/common/Menu/Menu";
import Notification from "components/common/Header/Notification";

export function Header() {

  return (
    <StyledHeader>
      <Menu />
        <Logo Logo fill="#F26A3B"/>
      <Notification />
    </StyledHeader>
  )
}
