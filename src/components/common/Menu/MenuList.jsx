import MenuDropDown from 'components/common/Menu/MenuDropDown';
import menuLists from './data.jsx';

const MenuList = () => {
  return (
    <>
      <div>
        <ul>
          {menuLists.map((menuList) => {
            return (
              <li key={menuList.id}>
                <MenuDropDown {...menuList} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default MenuList;
