import notification from "../../../assets/icon/notification.svg";
import styled from "styled-components";

const NotificationIcon = styled.img`
  width: 24px;
  height: 24px;

`
export const Notification = ({children, ...restProps}) => {
  return (
    <>
      <NotificationIcon src={notification} alt={children} {...restProps} />
    </>
  )
}

