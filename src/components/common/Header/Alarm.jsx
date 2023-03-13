import alarm from "../../../assets/alarm.svg";
export const Alarm = ({children, ...restProps}) => {
  return (
    <div>
      <img src={alarm} alt={children} {...restProps} />
    </div>
  )
}

