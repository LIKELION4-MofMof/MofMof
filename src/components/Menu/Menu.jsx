import menuIcon from "../../assets/menuIcon.svg";
import styled from "styled-components";

const StyledMenu = styled.div`
`
const MenuButton = styled.button`
  background: transparent;
  border-style: none;
  cursor: pointer;
`



export const Menu = ({children, ...restProps}) => {
  return (
    <StyledMenu>
      <MenuButton>
        <img src={menuIcon} alt={children} {...restProps}/>
      </MenuButton>
      {/* <ul>
        <li>
          리스트 1
        </li>
        <li>
          리스트 2
        </li>
        <li>
          리스트 3
        </li>
        <li>
          리스트 3
        </li>

      </ul>   */}
    </StyledMenu>
  )
}