import styled from 'styled-components/macro';

/* MorphInfo */
export const MorphInfoMain = styled.main`
  padding-left: 20px;
  padding-right: 20px;
`;
export const SearchContainer = styled.div`
  position: relative;
`;
export const MorphInfoSearchForm = styled.form`
  width: 100%;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 10px;
  border: 2px solid #ff5500;
  input {
    flex-grow: 1;
    border: none;
    text-indent: 5px;
  }
  input:focus {
    outline: none;
  }
  input::placeholder {
    color: #a7a6a5;
    font-size: 14px;
    font-weight: 500;
  }
  .btnDropDown {
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
  }
  .isActive {
    transform: scaleY(-1);
  }
  .btnSubmit {
    width: 40px;
    height: 40px;
    background: #ff5500;
  }
`;
export const MorphListUL = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;
export const MorphListLi = styled.li`
  width: 158px;
`;
export const FilterContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 15px;
  margin: 10px 0;
  padding-left: 5px;
  button {
    font-size: 14px;
    font-weight: 500;
    color: #6f6f6f;
    cursor: pointer;
    padding: 5px;
  }
`;

/* MorphListDropDown*/
export const MorphListDropDownUl = styled.ul`
  position: absolute;
  top: 38px;
  width: 100%;
  max-height: 140px;
  overflow-y: scroll;
  border: 2px solid #ff5500;
  padding-top: 2px;
  background: #ffffff;
  z-index: 5;
`;

/* MorphListDropDownItem */
export const DropDownItemBtn = styled.button`
  font-size: 16px;
  line-height: 20px;
  width: 100%;
  padding: 5px 0px;
  &:hover,
  &:focus {
    background: #f2f4f7;
  }
`;

/* MorphListItem */
export const MorphListItemFigure = styled.figure`
  img {
    width: 158px;
    height: 200px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    object-fit: cover;
  }
  figcaption {
    color: #000000;
    font-size: 16px;
    margin-top: 10px;
    text-align: center;
    width: 100%;
    padding: 0 5px;
    line-height: 1.6;
  }
`;
