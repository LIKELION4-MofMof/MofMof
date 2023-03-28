import HeaderVersion from 'components/common/Header/HeaderVersion';
import { Navigation } from 'components/common/Navigation/Navigation';
import styled from 'styled-components';
import { ReactComponent as Profile } from './profile.svg';
import { ReactComponent as Profile2 } from './profilebtn2.svg';
import { useState } from 'react';
import { hover } from '@testing-library/user-event/dist/hover';

const Fixmypage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(!isHovered);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  return (
    <div className="App">
      <HeaderVersion title="프로필 변경" />
      <Mypagediv>
        {isHovered ? (
          <Profile2 />
        ) : (
          <Profile onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
        )}
        <ProfileName>함종석</ProfileName>
        <ProfileCom>
          2자 이상 10자 이내의 한글, 영문, 숫자 입력 가능합니다.
        </ProfileCom>
        <ProfileP>
          <span>안녕하세요</span> <br />
          <span>펫테일게코를 키우는 함종석입니다</span>
        </ProfileP>
        <Profilestar></Profilestar>
      </Mypagediv>

      <Navigation />
    </div>
  );
};

export default Fixmypage;

const Mypagediv = styled.div`
  padding-top: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ProfileName = styled.p`
  color: #ff5500;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  margin-right: 20px;
  font-size: 20px;
  margin-left: 20px;
  width: 300px;
  font-weight: bolder;
  margin-top: 30px;
  border: 1px solid #ff5500;
  &:hover {
    cursor: pointer;
  }
`;

const ProfileP = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #ff5500;
  background-color: #fff;
  border-radius: 15px;
  line-height: 13px;
  width: 300px;
  height: 100px;
`;

const ProfileCom = styled.p`
  align-items: center;
  font-size: 12px;
  margin-bottom: 50px;
  margin-top: 10px;
`;

const Profilestar = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  color: #ff5500;
  font-size: 18px;
  margin-left: 20px;
  font-weight: bolder;
  hr {
    border: none;
    border-top: 1px solid black;
    width: 200px;
  }
`;
