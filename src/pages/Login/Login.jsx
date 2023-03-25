import HeaderVersion from 'components/common/Header/HeaderVersion';
import { LoginContainer, LoginForm, LoginInput, LoginFindWrapper, LoginBtn, RegisterBtn } from './Login.styled';
import { Link } from 'react-router-dom';
import { Navigation } from 'components/common/Navigation/Navigation';

const Login = () => {
  return (
    <div className="App">
      <HeaderVersion />
      <LoginContainer className='mainContainer'>
        <LoginForm>
          <LoginInput type="text" placeholder='아이디를 입력해주세요.' required/>
          <LoginInput type="text" placeholder='비밀번호를 입력해주세요.' required/>
          <LoginFindWrapper>
            <button>아이디 찾기</button>
            <button>비밀번호 찾기</button>
          </LoginFindWrapper>
          <LoginBtn type='submit'>로그인</LoginBtn>
          <Link to={"/register"}>
            <RegisterBtn type='button'>회원가입</RegisterBtn>
          </Link>
        </LoginForm>
      </LoginContainer>
      <Navigation />
    </div>
  )
}

export default Login;