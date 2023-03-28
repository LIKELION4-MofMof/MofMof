import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const [passwordErrorMessage, setPasswordErrorMessage] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState(false);

  //유효성 검사
  const [isEmail, setIsEmail] = useState(false)
  const [isName, setIsName] = useState(false)
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)

  //약관 동의하기
  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [termsCheck, setTermsCheck] = useState(false);
  const [privacyCheck, setPrivacyCheck] = useState(false);
  const [advertisementCheck, setAdvertisementCheck] = useState(false);

  const navigate = useNavigate();



  const handleReset = () => {
    console.log('reset');
  };

  const { name, email, password, passwordConfirm } = formStateRef.current;
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    
        //유효성 검사
        if (!name || name.trim().length < 2) {
          setNameErrorMessage(true);
          setIsName(false);
        } else setNameErrorMessage(false);
          setIsName(true);

        if (!Object.is(password, passwordConfirm)) {
          setPasswordErrorMessage(true);
          setIsPasswordConfirm(false);
        } else setPasswordErrorMessage(false);
          setIsPasswordConfirm(true);
      

      const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

      if (email !== emailRegex) {
        setEmailErrorMessage(true)
        setIsEmail(false)
      } else setEmailErrorMessage(false);
        setIsEmail(true)


        const user = await signUp(email, password, name);
        createAuthUser(user, {});
        // return navigate.push('/login');
        setTimeout(() => {
          navigate('/login');

        }, 1000);
  }
  

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
            {emailErrorMessage && <ErrorMessage>올바른 이메일 형식을 입력해주세요.</ErrorMessage>}
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
            <PasswordConfirmInput type="password" name="passwordConfirm" minlength="8" required placeholder="비밀번호 재입력" onChange={handleChangeInput} />
            {passwordErrorMessage && <ErrorMessage>두 비밀번호가 달라요. 확인해 보시겠어요?</ErrorMessage>}
          </fieldset>
          <fieldset>
            <RegisterLegend>개인 정보</RegisterLegend>
            <RequiredLabel htmlFor="name">이름</RequiredLabel>
            <RegisterInput type="text" id="name" name="name" onChange={handleChangeInput} required placeholder="이름(실명) 입력해주세요."/>
            {nameErrorMessage && <ErrorMessage>이름은 두 글자 이상 입력해주세요.</ErrorMessage>}
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
            <SubmitBtn type="submit" disabled={(isEmail && isName && isPasswordConfirm)}>본인인증하고 가입하기</SubmitBtn>
          </Agreement>
        </RegisterForm>
      </RegisterContainer>
      <Navigation />
    </div>
  )
}

export default Register;