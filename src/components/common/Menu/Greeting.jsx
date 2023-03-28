import {
  LoginRegister,
  LoginWrapper,
  UserProfile,
  LoginBtnWrapper,
  LoginBtn,
  LoginIndex,
  LoginBtnIcon,
} from './Menu.styled';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase-db/auth-db/index';
import { useState, useEffect } from 'react';

function GuestGreeting() {
  // console.log(auth);
  return (
    <LoginRegister>
      <UserProfile />
      <LoginWrapper>
        <Link to={'/login'}>
          <LoginBtnWrapper>
            <LoginBtn type="button">로그인 & 가입하기</LoginBtn>
            <LoginBtnIcon />
          </LoginBtnWrapper>
        </Link>
        <LoginIndex>
          로그인하고 모프모프 서비스를 자유롭게 이용해보세요
        </LoginIndex>
      </LoginWrapper>
    </LoginRegister>
  );
}

function UserGreeting() {
  const user = auth.currentUser;
  if (user !== null) {
    const displayName = user.displayName;
    const email = user.email;
  }
  return (
    <LoginRegister>
      <UserProfile />
      <LoginWrapper>
        <LoginBtnWrapper>
          <Link to={'/myPage'}>
            <LoginBtn type="button">{user.displayName}</LoginBtn>
          </Link>
          <LoginBtnIcon></LoginBtnIcon>
        </LoginBtnWrapper>
        <LoginIndex>{user.email}</LoginIndex>
      </LoginWrapper>
    </LoginRegister>
  );
}

export function Greeting(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(auth.currentUser);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        //로그인
        setIsLoggedIn(true);
      } else {
        //로그아웃
        setIsLoggedIn(false);
      }
    });
  }, []);
  return <>{isLoggedIn ? <UserGreeting /> : <GuestGreeting />}</>;
}
