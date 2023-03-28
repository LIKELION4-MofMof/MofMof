import styled from "styled-components/macro"
import checkOrange from "assets/icon/checkOrange.svg"
import check from "assets/icon/check.svg"
import checkAgreementAll from "assets/icon/checkAgreementAll.svg"
import checkAgreementAllSolid from "assets/icon/checkAgreementAllSolid.svg"
import checkAgreement from "assets/icon/checkAgreement.svg"


export const RegisterContainer = styled.div`
  margin: 0 20px;
`

export const RegisterLegend = styled.legend`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0); 
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  white-space: nowrap; 
`

export const RegisterForm = styled.form`
  margin-top: 110px;
`

export const RequiredLabel = styled.label`
  line-height: 22px;
  margin: 20px 0 4px 0;
  display: inline-block;
  position: relative;
  :after{
    content: '';
    background: #FF2E2E;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    position: absolute;
    top: rem(-1);
    left: rem(-10);
  }
`

export const RegisterLabel = styled.label`
  line-height: 22px;
  position: relative;
  margin: 20px 0 4px 0;
  display: inline-block;
  color: #000000;
`


export const RegisterInput = styled.input`
  border: #C1C1C1 1px solid;
  border-radius: 5px;
  width: 335px;
  height: 44px;
  padding-left: 10px;
  color: #A7A7A7;
`
export const PasswordInput = styled.input`
  border: #C1C1C1 1px solid;
  border-radius: 5px;
  width: 335px;
  height: 44px;
  padding-left: 10px;
  color: #A7A7A7;
  margin-bottom: 10px;
`

export const PasswordConfirmInput = styled.input`
border: #C1C1C1 1px solid;
border-radius: 5px;
width: 335px;
height: 44px;
padding-left: 10px;
color: #A7A7A7;
`

export const ErrorMessage = styled.p`
  font-size: 10px;
  line-height: 12px;
  color: #FF2E2E;
  margin: 4px 0;
`

export const GenderCheck = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0 20px 0;
`

export const GenderCheckBox = styled.input`
  vertical-align: middle;
  appearance: none;
  width: 24px;
  height: 24px;
  border: 1px solid #C4C4C4;
  border-radius: 50%;
  :checked{
  background: url(${checkOrange});
  border: none;
  }
  :focus-visible{
    outline-offset: 2px;
    outline: 2px dotted #FF5500;
  }
  :hover {
  box-shadow: 0 0 0 max(3px) #C4C4C4;
  cursor: pointer;
  }
            
`

export const BirthWrapper = styled.div`
  padding: 20px 0;
  input[type="date"]::-webkit-inner-spin-button,
  input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
  }
`
export const Agreement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  color: #7B7B7B;
`

export const AgreementAllInput = styled.input`
  vertical-align: middle;
  appearance: none;
  width: 24px;
  height: 24px;
  margin-right: 6px;
  background: url(${checkAgreementAll}) -1px -1px;
  cursor: pointer;
  :checked {
    background: url(${checkAgreementAllSolid}) -1px -1px;
  }
`

export const AgreementInput = styled.input`
  vertical-align: middle;
  appearance: none;
  width: 24px;
  height: 24px;
  background: url(${check});
  cursor: pointer;
  margin-right: 6px;
  :checked{
    background: url(${checkAgreement});
  }
`

export const AgreementDetail = styled.span`
  text-decoration: underline;
  margin-left: 6px;
`

export const SubmitBtn = styled.button`
  background: #D9D9D9;
  border-radius: 5px;
  width: 335px;
  height: 44px;
  color: #7B7B7B;
`