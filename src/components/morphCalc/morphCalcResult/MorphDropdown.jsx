import React, { useState } from 'react';
import styled from 'styled-components';

export function MorphDropdown(a, b) {
  const [dropdown, setDropdown] = useState(false);

  function handleQNA() {
    setDropdown(!dropdown);
  }

  return (
    <>
      <DropdownContainer>
        <DropdownText onClick={handleQNA}>사용법</DropdownText>
        <DropdownButton
          onClick={handleQNA}
          bgColor={dropdown ? '#5f0bce' : '#D9D9D9'}
        >
          <span>?</span>
        </DropdownButton>
        {dropdown && (
          <DropdownContent>
            <DropdownContentHeader>모프 계산기 사용법</DropdownContentHeader>
            <br />
            <DropdownContentUl>
              <p>1. 아빠 엄마의 모프를 선택한다.</p>
              <p>2. 계산하기를 누르면 선택한 모프들을 조합하여 계산</p>
              <p>3. 열성유전자는 빨간색 우성유전자는 파랑색입니다.</p>
              <p>4. 공백은 노말을 뜻합니다.</p>
            </DropdownContentUl>
          </DropdownContent>
        )}
      </DropdownContainer>
    </>
  );
}

const DropdownContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  top: 80px;
  left: 816px;
  z-index: 1000;

  position: fixed;
`;
const DropdownText = styled.span`
  cursor: pointer;
  font-size: 15px;
`;

const DropdownButton = styled.button`
  width: 17px;
  height: 17px;
  background-color: ${({ bgColor }) => bgColor};
  color: #ffff;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DropdownContent = styled.div`
  position: fixed;
  padding: 20px;
  top: 100px;
  right: 535px;
  flex-direction: column;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-around;
  border-radius: 5px;
  border: 1px solid gray;
  width: 300px;
`;

const DropdownContentHeader = styled.p`
  background-color: #5f0bce;
  padding: 7px 5px;
  text-align: center;
  border-radius: 5px;
  color: #ffff;
`;

const DropdownContentUl = styled.ul`
  border: 1px dotted #5f0bce;
  padding: 20px;
  & > p {
    margin: 10px 0;
    font-size: 14px;
    line-height: 1.5;
    color: #333;
  }
`;
