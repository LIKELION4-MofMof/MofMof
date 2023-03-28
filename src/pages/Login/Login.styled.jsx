import styled from 'styled-components';

export const LoginContainer = styled.div`
  margin: 0 20px;
`

export const LoginForm = styled.form`
  
`

export const LoginInput = styled.input`
  border: #C1C1C1 1px solid;
  border-radius: 5px;
  width: 335px;
  height: 44px;
  padding-left: 10px;
  color: #A7A7A7;
  margin-top: 20px;
`

export const LoginFindWrapper = styled.div`
  text-align: right;
  font-size: 12px;
  margin: 20px 0;
  button:first-child {
    &:after {
      content: '';
      display: inline-block;
      margin: 0 4px;
      width: 1px;
      height: 10px;
      background: #000000;
      align-self: center;
    }
  }
`

export const LoginBtn = styled.button`
  background: #FF5500;
  border-radius: 30px;
  width: 336px;
  height: 44px;
  color: #FFFFFF;
  font-weight: 600;
  font-size: 16px;
  line-height: 19.36px;
`

export const RegisterBtn = styled.button`
  background: #FFFFFF;
  border: 1px solid #FF5500;
  width: 336px;
  height: 44px;
  border-radius: 30px;
  color: #FF5500;
  font-weight: 600;
  font-size: 16px;
  line-height: 19.36px;
  margin-top: 14px;
`