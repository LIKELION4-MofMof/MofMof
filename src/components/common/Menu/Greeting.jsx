import { LoginRegister, LoginWrapper, Circle, LoginBtn, LoginIndex } from "./Menu.styled"



function GuestGreeting(props) {
  return (
  <LoginRegister>
    <Circle />
    <LoginWrapper>
      <LoginBtn type="button">로그인&가입하기</LoginBtn>
      <LoginIndex>로그인하고 모프모프 서비스를 자유롭게 이용해보세요</LoginIndex>
    </LoginWrapper>
  </LoginRegister>
  )
}

function UserGreeting(props) {
  return(
    <LoginRegister>
    <Circle />
    <LoginWrapper>
      <LoginBtn type="button">도마뱀귀엽조</LoginBtn>
      <LoginIndex>domabam@mofmof.com</LoginIndex>
    </LoginWrapper>
  </LoginRegister>
  )
}



export function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return (
    <>
    { isLoggedIn ? (<UserGreeting />) : (<GuestGreeting />)}
    </>
  )
}