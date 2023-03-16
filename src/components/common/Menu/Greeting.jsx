import styled from "styled-components";


const LoginRegister = styled.section`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 25px 0 ;
  padding: 0 20px;
`

const LoginWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center; */
  width: 150px;
`

const Circle = styled.span`
  display: inline-block;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: #D9D9D9;
`

const LoginBtn = styled.button`
  border: none;
  background: transparent;
  color: #ffff;
  font-size: 20px;
  font-weight: 500;
  padding: 0;
`
const LoginIndex = styled.p`
  font-size: 12px;
  display: inline-block;
`


function GeustGreeting(props) {
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
    { isLoggedIn ? (<UserGreeting />) : (<GeustGreeting />)}
    </>
  )
}