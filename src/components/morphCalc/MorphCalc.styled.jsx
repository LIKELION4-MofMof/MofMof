import styled from 'styled-components';

/* 모프계산기 페이지*/
export const DivMorphCalc = styled.div`
  width: 375px;
  border: 1px solid black;
  border-radius: 10px;
  height: 100vh;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 8px;
`;

/* 버튼 container*/
export const MorphCalcBtnContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;
export const BtnCalc = styled.button`
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background: #f26a3b;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
`;
