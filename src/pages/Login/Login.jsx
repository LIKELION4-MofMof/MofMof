import HeaderVersion from 'components/common/Header/HeaderVersion';
import {
  LoginContainer,
  LoginForm,
  LoginInput,
  LoginFindWrapper,
  LoginBtn,
  RegisterBtn,
} from './Login.styled';
import { Link, useNavigate } from 'react-router-dom';
import { Navigation } from 'components/common/Navigation/Navigation';
import { useRef, useEffect } from 'react';

import { useSignIn, useAuthState } from 'firebase-db/auth-db/index';

const Login = () => {
  const initialFormState = {
    email: '',
    password: '',
  };

  const formStateRef = useRef(initialFormState);

  const { isLoading: isLoadingSignIn, signIn } = useSignIn();
  const { isLoading, error, user } = useAuthState();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    const { email, password } = formStateRef.current;
    await signIn(email, password);
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [navigate, user]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;
  };
  if (isLoading) {
    return <figure role="alert">페이지를 준비 중입니다.</figure>;
  }

  if (error) {
    return <div role="alert"> 오류! {error.message}</div>;
  }

  return (
    <div className="App">
      <HeaderVersion title="로그인" />
      <LoginContainer className="mainContainer">
        <LoginForm onSubmit={handleSignIn}>
          <label htmlFor="email" className="a11yHidden">
            이메일
          </label>
          <LoginInput
            name="email"
            type="email"
            placeholder="아이디를 입력해주세요."
            onChange={handleChangeInput}
            required
          />
          <label htmlFor="password" className="a11yHidden">
            비밀번호
          </label>
          <LoginInput
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={handleChangeInput}
            required
          />
          <LoginFindWrapper>
            <button>아이디 찾기</button>
            <button>비밀번호 찾기</button>
          </LoginFindWrapper>
          <LoginBtn type="submit">로그인</LoginBtn>
          <Link to={'/register'}>
            <RegisterBtn type="button">회원가입</RegisterBtn>
          </Link>
        </LoginForm>
      </LoginContainer>
      <Navigation />
    </div>
  );
};

export default Login;
