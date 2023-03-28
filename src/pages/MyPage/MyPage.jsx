import HeaderVersion from 'components/common/Header/HeaderVersion';
import { Navigation } from 'components/common/Navigation/Navigation';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as Profile } from './profile.svg';
import { ReactComponent as Pen } from './pen.svg';
import { ReactComponent as Profilebtn } from './profilebtn.svg';

import styled from 'styled-components';

const MyPage = () => {
  const navigate = useNavigate();

  const handleProfileNameClick = () => {
    navigate('/fix-mypage');
  };

  const handleProfileBtnClick = () => {
    navigate('/fattail-home');
  };
  return (
    <div className="App">
      <HeaderVersion title="마이페이지" />

      <Mypagediv>
        <Profile />
        <ProfileName onClick={handleProfileNameClick}>
          함종석 <Pen />
        </ProfileName>
        <ProfileP>
          <span>안녕하세요</span> <br />
          <span>펫테일게코를 키우는 함종석입니다</span>
        </ProfileP>
        <Profilestar>
          즐겨찾기 <hr />
        </Profilestar>
        <Profilebtndiv>
          <Profilebtn onClick={handleProfileBtnClick} />
          <Profilebtn onClick={handleProfileBtnClick} />
        </Profilebtndiv>
      </Mypagediv>

      <Navigation />
    </div>
  );
};

export default MyPage;

const Mypagediv = styled.div`
  padding-top: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

const ProfileName = styled.span`
  color: #ff5500;
  font-size: 20px;
  margin-left: 20px;
  font-weight: bolder;
  border-bottom: #ff5500;
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
  background-color: #f6dfa4;
  border-radius: 15px;
  line-height: 13px;
  width: 240px;
  height: 100px;
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

const Profilebtndiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 80px;
  &:hover {
    cursor: pointer;
  }
`;
