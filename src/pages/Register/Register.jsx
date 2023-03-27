import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useSignUp, useAuthState } from 'firebase-db/auth-db/index';
// import { useDocumentTitle } from '@/hooks';
import { useCreateAuthUser } from 'firebase-db/firestore-db/index';
// import { useForm } from 'react-hook-form';

import { RegisterContainer, RegisterLegend, RequiredLabel,RegisterForm, RegisterLabel, RegisterInput, PasswordInput, PasswordConfirmInput, ErrorMessage, GenderCheck, GenderCheckBox, BirthWrapper, Agreement, AgreementAllInput, AgreementInput, AgreementDetail, SubmitBtn } from "./Register.styled"
import HeaderVersion from "components/common/Header/HeaderVersion"
import { Navigation } from "components/common/Navigation/Navigation";

const initialFormState = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
};

const Register = () => {
  const { signUp } = useSignUp();
  const { createAuthUser } = useCreateAuthUser();
  const { isLoading, error, user } = useAuthState;

  const formStateRef = useRef(initialFormState);

  //비밀번호 확인 에러메세지
  const [errorMessage, setErrorMessage] = useState(false);

  //약관 동의하기
  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [termsCheck, setTermsCheck] = useState(false);
  const [privacyCheck, setPrivacyCheck] = useState(false);
  const [advertisementCheck, setAdvertisementCheck] = useState(false);



  const handleReset = () => {
    console.log('reset');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, passwordConfirm } = formStateRef.current;


    // 유효성 검사
    if (!name || name.trim().length < 2) {
      setErrorMessage(true)
    } else setErrorMessage(false);

    if (!Object.is(password, passwordConfirm)) {
      setErrorMessage(true)
    } else setErrorMessage(false);

   const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

   if (email !== emailRegex) {
    setErrorMessage(true)
  } else setErrorMessage(false);
   

    const user = await signUp(email, password, name);
    await createAuthUser(user, {});
  };

  // useEffect(() => {
  //   if(user) {
  //     (async () => {
  //       const { name, email } = formStateRef.current;
  //       await createAuthUser(user, { name, email });
  //     })();
  //   }
  // }, [createAuthUser, user]);


  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    formStateRef.current[name] = value;
  }
  


  // 이용약관동의
  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setAgeCheck(true);
      setTermsCheck(true);
      setPrivacyCheck(true);
      setAdvertisementCheck(true);
    } else {
      setAllCheck(false);
      setAgeCheck(false);
      setTermsCheck(false);
      setPrivacyCheck(false);
      setAdvertisementCheck(false);
    }
  }

  const ageBtnEvent = () => {
    if(ageCheck === false) {
      setAgeCheck(true)
    } else {
      setAgeCheck(false)
    }
  };  

  const termsBtnEvent = () => {
    if(termsCheck === false) {
      setTermsCheck(true) 
    } else {
      setTermsCheck(false)
    }
  };

  const privacyBtnEvent = () => {
    if(privacyCheck === false) {
      setPrivacyCheck(true)
    } else {
      setPrivacyCheck(false)
    }
  };

  const advertiseBtnEvent = () => {
    if(advertisementCheck === false) {
      setAdvertisementCheck(true)
    } else {
      setAdvertisementCheck(false)
    }
  };

  useEffect(() => {
    if(ageCheck === true && termsCheck === true && privacyCheck === true && advertisementCheck === true) {
      setAllCheck(true)
    } else {
      setAllCheck(false)
    }
  }, [ageCheck, termsCheck, privacyCheck, advertisementCheck])

  return (
    <div className="App">
      <HeaderVersion title={"회원가입"} />
      <RegisterContainer className="mainContainer">
        <RegisterForm onSubmit={handleSubmit} onReset={handleReset}>
          <fieldset>
            <RegisterLegend>로그인 정보</RegisterLegend>
            <RequiredLabel htmlFor="id">아이디</RequiredLabel>
            <RegisterInput
              name="email"
              type="email" 
              id="id" 
              placeholder="예) mmooff@gmail.com"
              required
              // minLength="5"
              onChange={handleChangeInput}
            />
            {errorMessage && <ErrorMessage>올바른 이메일 형식을 입력해주세요.</ErrorMessage>}
            <RequiredLabel htmlFor="password">비밀번호</RequiredLabel>
            <PasswordInput 
              type="password" 
              id="password" 
              name="password" 
              onChange={handleChangeInput} 
              minlength="8" 
              required 
              placeholder="숫자, 영문 조합 최소 8자"
              />
            {/* <PasswordWarning>알맞은 비밀번호입니다.</PasswordWarning> */}
            <PasswordConfirmInput type="password" name="passwordConfirm" minlength="8" required placeholder="비밀번호 재입력" onChange={handleChangeInput} />
            {errorMessage && <ErrorMessage>두 비밀번호가 달라요. 확인해 보시겠어요?</ErrorMessage>}
          </fieldset>
          <fieldset>
            <RegisterLegend>개인 정보</RegisterLegend>
            <RequiredLabel htmlFor="name">이름</RequiredLabel>
            <RegisterInput type="text" id="name" name="name" onChange={handleChangeInput} required placeholder="이름(실명) 입력해주세요."/>
            {errorMessage && <ErrorMessage>이름은 두 글자 이상 입력해주세요.</ErrorMessage>}
            {/* <RequiredLabel htmlFor="email">이메일</RequiredLabel>
            <RegisterInput type="text" id="email" onChange={handleChangeInput} required placeholder="예) mmooff@gmail.com"/> */}
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
              <AgreementAllInput type="checkbox" id="agreementAll" checked={allCheck} onChange={allBtnEvent}/>
              <RegisterLabel htmlFor="agreementAll">약관 전체 동의하기(선택 동의 포함)</RegisterLabel>
            </div>
            <div>
              <AgreementInput type="checkbox" id="agreementAge" required checked={ageCheck} onChange={ageBtnEvent}/>
              <label htmlFor="agreementAge">[필수] 만 14세 이상입니다.</label>
            </div>
            <div>
              <AgreementInput type="checkbox" id="agreementTermsOfUse" required checked={termsCheck} onChange={termsBtnEvent}/>
              <label htmlFor="agreementTermsOfUse">[필수] 이용약관 동의</label>
              <AgreementDetail>자세히</AgreementDetail>
            </div>
            <div>
              <AgreementInput type="checkbox" id="agreementPrivacy" required checked={privacyCheck} onChange={privacyBtnEvent}/>
              <label htmlFor="agreementPrivacy">[필수] 개인정보 수집 및 이용 동의</label>
              <AgreementDetail>자세히</AgreementDetail>
            </div>
            <div>
              <AgreementInput type="checkbox" id="agreementAdvertisement" checked={advertisementCheck} onChange={advertiseBtnEvent}/>
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