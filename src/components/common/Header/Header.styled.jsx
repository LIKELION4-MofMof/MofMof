import styled from 'styled-components/macro';
import notification from 'assets/icon/notification.svg';
import backIcon from 'assets/icon/backIcon.svg';
import share from 'assets/icon/share.svg'

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #ffff;
  height: 100px;
  padding: 0 20px;
  position: fixed;
  width: 373px;
  z-index: 100;
  box-shadow: 0 0.1px 5px 1px rgba(190, 190, 190, 0.2);
`


export const NotificationIcon = styled.button`
  width: 24px;
  height: 24px;
  background: url(${notification});
`

export const LogoBtn = styled.button`
  margin: 40px 0 10px 20px;
`

export const HeaderContainer = styled.div`
  height: 100px;
  background: #ffffff;
  box-shadow: 0 0.1px 5px 1px rgba(190, 190, 190, 0.2);
  position: fixed;
  width: 373px;
  z-index: 100;
`

export const HeaderVersionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 63px;
  padding-top: 22px;
`

export const BackBtn = styled.button`
  background: url(${backIcon});
  width: 10px;
  height: 18px;
`

export const HeaderVersionTitle = styled.h3`
  font-weight: 600;
  font-size: 20px;
`

export const ShareBtn = styled.button`
  background: url(${share});
  width: 24px;
  height: 24px;
`
