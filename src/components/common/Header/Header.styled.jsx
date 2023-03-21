import styled from 'styled-components/macro';
import notification from 'assets/icon/notification.svg';

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
`;

export const NotificationIcon = styled.button`
  width: 24px;
  height: 24px;
  background: url(${notification});
`;
