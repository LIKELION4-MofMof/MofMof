import { StyledHeader } from './Header.styled';
import Menu from 'components/common/Menu/Menu';
import Notification from 'components/common/Header/Notification';
import LogoHorizon from './LogoHorizon';

export function Header() {
  return (
    <StyledHeader>
      <Menu />
      <LogoHorizon />
      <Notification />
    </StyledHeader>
  );
}
