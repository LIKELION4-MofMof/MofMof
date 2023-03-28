import styled from 'styled-components/macro';
import notification from 'assets/icon/notification.svg';
import backIcon from 'assets/icon/backIcon.svg';
import share from 'assets/icon/share.svg';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #ffff;
  height: 100px;
  padding: 0 20px;
  position: fixed;
  width: 375px;
  z-index: 100;
  box-shadow: 0 0.1px 5px 1px rgba(190, 190, 190, 0.2);
`;

export const NotificationIcon = styled.button`
  width: 24px;
  height: 24px;
  background: url(${notification});
`;

export const LogoBtn = styled.button`
  margin: 40px 0 10px 20px;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  background: #ffffff;
  box-shadow: 0 0.1px 5px 1px rgba(190, 190, 190, 0.5);
  position: fixed;
  width: 375px;
  z-index: 100;
`;

export const HeaderVersionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 63px;
  padding: 22px 20px 0 20px;
`;

export const BackBtn = styled.button`
  background: url(${backIcon});
  width: 10px;
  height: 18px;
  margin-right: 5px;
`;

export const HeaderVersionTitle = styled.h3`
  font-weight: 600;
  font-size: 20px;
  white-space: nowrap;
`;

export const ShareBtn = styled.button`
  background: url(${share});
  width: 24px;
  height: 24px;
`;

export const EmptyBtn = styled.button`
  width: 24px;
  height: 24px;
`;

export const DropDiv = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background-color: #fff;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  box-shadow: 0 0.1px 5px 1px rgba(190, 190, 190, 0.2);
  padding: 8px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > button {
    display: flex;
    align-items: center;
    margin: 4px;
    font-size: 14px;

    svg {
      margin-right: 4px;
    }
  }
`;
