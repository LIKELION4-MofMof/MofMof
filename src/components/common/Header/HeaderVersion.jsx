import {HeaderContainer, HeaderVersionWrapper, HeaderVersionTitle, BackBtn, ShareBtn} from './Header.styled'



const HeaderVersion = () => {
  
  const HeaderLists = [
    '로그인','회원가입','모프소개','고스트','펫테일게코 모프계산기','펫테일게코 모프계산결과'
  ]
  const HeaderTitleList = HeaderLists.map((HeaderList, idx) => (
    <HeaderVersionTitle key={idx}>{HeaderList}</HeaderVersionTitle>
  ))
  return (
    <HeaderContainer>
      <HeaderVersionWrapper>
        <BackBtn></BackBtn>
        {HeaderTitleList[4]}
        <ShareBtn></ShareBtn>
      </HeaderVersionWrapper>
    </HeaderContainer>
  )
}

export default HeaderVersion;