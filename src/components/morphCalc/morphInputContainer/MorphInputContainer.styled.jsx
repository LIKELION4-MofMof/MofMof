import styled, { css } from 'styled-components';
import ArrowChevron from 'assets/icon/ArrowChevron.svg';
import Mlogo from 'assets/logo/mlogo.svg';
import close from 'assets/icon/close.svg';

/* Morph Input Container */
export const SectionInputContainer = styled.section`
  background: url(${Mlogo}) no-repeat 50% 50%;
`;

export const InputTitle = styled.div`
  width: 335px;
  height: 30px;
  background: #f26a3b;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
  }
`;
export const InputWrapper = styled.div`
  margin-top: 10px;
  width: 335px;
  height: 40px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  border: 1px solid #f26a3b;
  border-radius: 10px;
  padding: 12px 11px;
  gap: 8px;
  .searchIcon {
    transform: translateY(2px);
  }
  .searchInput {
    flex-grow: 1;
    border: none;
    text-align: center;
  }
  .searchInput::placeholder {
    color: #ff5500;
    font-size: 16px;
    font-weight: 500;
  }
  .btnShowMorphList {
    width: 24px;
    height: 24px;
    background: url(${ArrowChevron}) no-repeat 0 0 / cover;
    cursor: pointer;
    border: none;
  }
  ${(props) =>
    (props.showDropBox || props.filterDropBox) &&
    css`
      border-radius: 10px 10px 0 0px;
    `}
`;
export const SelectedBox = styled.ul`
  border: 2px dashed #f26a3b;
  border-radius: 10px;
  margin-top: 88px;
  width: 335px;
  height: 90px;
  padding: 11px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
`;

/* Morph List Drop Box*/
export const ButtonUl = styled.ul`
  width: 335px;
  height: 95px;
  border: 1px solid #f26a3b;
  overflow: auto;
  padding: 11px;
  position: absolute;
  z-index: 2;
  background: #ffffff;
  text-align: center;
`;

/* Morph Button */
export const Button = styled.button`
  width: 100%;
  background: none;
  cursor: pointer;
  border: none;
  font-size: 16px;

  &:hover {
    background: #f2f4f7;
  }
`;

/* Selected Button */
export const SelectedBtnContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 3px;
  border-radius: 10px;
  padding: 10px 12px;
  span {
    font-size: 12px;
  }
  ${(props) =>
    props.type === 'dominant'
      ? css`
          background: #fa806e;
          color: #ffff;
        `
      : css`
          background: #d9a61c;
          color: #ffff;
        `}
`;
export const SelectedBtnClose = styled.button`
  background: url(${close}) no-repeat 0 0 / cover;
  width: 10px;
  height: 10px;
  border: none;
  cursor: pointer;
`;
