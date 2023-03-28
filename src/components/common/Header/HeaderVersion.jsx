import {
  HeaderContainer,
  HeaderVersionWrapper,
  HeaderVersionTitle,
  BackBtn,
  ShareBtn,
  EmptyBtn,
  DropDiv,
} from './Header.styled';
import { ReactComponent as Diagonal } from 'assets/icon/diagonal.svg';
import { ReactComponent as Kakao } from 'assets/icon/kakao.svg';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const HeaderVersion = (props) => {
  const { title } = props;
  const isShare = props.isShare;
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <HeaderContainer>
      <HeaderVersionWrapper>
        <BackBtn onClick={() => navigate(-1)}></BackBtn>
        <HeaderVersionTitle>{title}</HeaderVersionTitle>
        {isShare ? <ShareBtn onClick={handleDropdown} /> : <EmptyBtn />}
        {showDropdown && (
          <DropDiv>
            <button onClick={() => alert('링크를 복사하였습니다')}>
              <Diagonal />
              링크복사
            </button>
            <button onClick={() => alert('카카오톡 링크 복사하였습니다')}>
              <Kakao />
              카카오톡
            </button>
          </DropDiv>
        )}
      </HeaderVersionWrapper>
    </HeaderContainer>
  );
};

export default HeaderVersion;
