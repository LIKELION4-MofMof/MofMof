import {NotificationIcon} from "./Header.styled";
import notification from "assets/icon/notification.svg";


const Notification = ({children, ...restProps}) => {
  return (
    <>
      <NotificationIcon aria-label="알림" />
    </>
  )
}

export default Notification;

