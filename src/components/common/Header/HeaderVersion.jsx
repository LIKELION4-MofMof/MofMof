import {HeaderContainer, HeaderVersionWrapper, HeaderVersionTitle, BackBtn, ShareBtn, EmptyBtn} from './Header.styled'



const HeaderVersion = (props) => {
  const { title } = props;
  const isShare = props.isShare;
  // const HeaderLists = [
  //   '로그인','회원가입','모프소개','고스트','펫테일게코 모프계산기','펫테일게코 모프계산결과'
  // ]

  return (
    <HeaderContainer>
      <HeaderVersionWrapper>
        <BackBtn></BackBtn>
        <HeaderVersionTitle>{title}</HeaderVersionTitle>
        {isShare ? <ShareBtn/> : <EmptyBtn/>}  
      </HeaderVersionWrapper>
    </HeaderContainer>
  )
}

export default HeaderVersion;