
import { RegisterContainer, RegisterLegend, RequiredLabel,RegisterForm, RegisterLabel, RegisterInput, PasswordInput, PasswordWarning, GenderCheck, GenderCheckBox, BirthWrapper, Agreement, AgreementAllInput, AgreementInput, AgreementDetail, SubmitBtn } from "./Register.styled"
import HeaderVersion from "components/common/Header/HeaderVersion"
import { Navigation } from "components/common/Navigation/Navigation";


const Register = () => {
  return (
    <div className="App">
      <HeaderVersion/>
      <RegisterContainer className="mainContainer">
        <RegisterForm action="">
          <fieldset>
            <RegisterLegend>로그인 정보</RegisterLegend>
            <RequiredLabel htmlFor="id">아이디</RequiredLabel>
            <RegisterInput type="text" id="id" minlength="5" maxlength="11" required placeholder="영문, 숫자 5-11자"/>
            <RequiredLabel htmlFor="password">비밀번호</RequiredLabel>
            <PasswordInput type="text" id="password" minlength="8" required placeholder="숫자, 영문 조합 최소 8자"/>
            <PasswordWarning>알맞은 비밀번호입니다.</PasswordWarning>
            <PasswordInput type="text" id="password" minlength="8" required placeholder="비밀번호 재입력"/>
            <PasswordWarning>두 비밀번호가 달라요. 확인해 보시겠어요?</PasswordWarning>
          </fieldset>
          <fieldset>
            <RegisterLegend>개인 정보</RegisterLegend>
            <RequiredLabel htmlFor="name">이름</RequiredLabel>
            <RegisterInput type="text" id="name" required placeholder="이름(실명) 입력해주세요."/>
            <RequiredLabel htmlFor="email">이메일</RequiredLabel>
            <RegisterInput type="text" id="email" required placeholder="예) mmooff@gmail.com"/>
            <RequiredLabel htmlFor="gender">성별</RequiredLabel>
            <GenderCheck>
              <label htmlFor="genderMale">남자</label>
              <GenderCheckBox type="radio" id="genderMale" />
              <label htmlFor="genderFemale">여자</label>
              <GenderCheckBox type="radio" id="genderFemale" />
              <label htmlFor="noneCheck">선택안함</label>
              <GenderCheckBox type="radio" id="noneCheck"/>
            </GenderCheck>
            <BirthWrapper>
              <RegisterLabel htmlFor="birth">생년월일</RegisterLabel>
              <RegisterInput type="date" id="birth" data-placeholder="YYYY / MM / DD" />
            </BirthWrapper>
          </fieldset>
          <Agreement>
            <div>
              <AgreementAllInput type="checkbox" id="agreementAll" />
              <RegisterLabel htmlFor="agreementAll">약관 전체 동의하기(선택 동의 포함)</RegisterLabel>
            </div>
            <div>
              <AgreementInput type="checkbox" id="agreementAge" />
              <label htmlFor="agreementAge">[필수] 만 14세 이상입니다.</label>
            </div>
            <div>
              <AgreementInput type="checkbox" id="agreementTermsOfUse" />
              <label htmlFor="agreementTermsOfUse">[필수] 이용약관 동의</label>
              <AgreementDetail>자세히</AgreementDetail>
            </div>
            <div>
              <AgreementInput type="checkbox" id="agreementPrivacy" />
              <label htmlFor="agreementPrivacy">[필수] 개인정보 수집 및 이용 동의</label>
              <AgreementDetail>자세히</AgreementDetail>
            </div>
            <div>
              <AgreementInput type="checkbox" id="greementAdvertisement" />
              <label htmlFor="agreementAdvertisement">[선택] 광고성 정보 수신 동의</label>
            </div>
            <SubmitBtn type="submit">본인인증하고 가입하기</SubmitBtn>
          </Agreement>
        </RegisterForm>
      </RegisterContainer>
      <Navigation />
    </div>
  )
}

export default Register;