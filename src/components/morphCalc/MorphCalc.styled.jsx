import styled, { css } from 'styled-components';

/* 모프계산기 페이지*/
export const DivMorphCalc = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 100px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 8px;
  position: relative;
`;

/* 버튼 container*/
export const MorphCalcBtnContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 20px;
  margin-top: 9px;
`;
export const BtnCalc = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  background: #f26a3b;
  color: #ffffff;
  border: none;
  ${(props) =>
    props.reset &&
    css`
      background: #5f0bce;
      color: #ffff;
      border: 2px solid #5f0bce;
    `}
`;
