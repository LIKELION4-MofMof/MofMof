import logo from "../../../assets/logo/logo.svg";

export const Logo = ({children, ...restProps}) => (
  <figure>
    <img src={logo} alt={children ? '' : '모프모프'} {...restProps}/>
    <figcaption>
    </figcaption>
  </figure>
)
