import {NotificationIcon} from "./Header.styled";
import notification from "assets/icon/notification.svg";


const Notification = ({children, ...restProps}) => {
  return (
    <>
      <NotificationIcon src={notification} alt={children} {...restProps} />
    </>
  )
}

export default Notification;

