import styled from 'styled-components/macro';
import closeIcon from 'assets/icon/close.svg';
import searchingIcon from 'assets/icon/searching.svg';

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
  .btnReset {
    width: 22px;
    height: 22px;
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

/* MorphListDropDown*/
export const MorphListDropDownUl = styled.ul`
  position: absolute;
  top: 39px;
  width: 100%;
  height: 140px;
  overflow-y: scroll;
  border: 2px solid #ff5500;
  padding-top: 1px;
  background: #ffffff;
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
  margin-top: 20px;
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
  }
`;
