import * as React from "react";
import { Link } from "react-router-dom";
import { GeckoContainer, GeckoPageTop, GeckoPageTitleWrapper, GeckoPageTitle, GeckoPageDescription, GeckoImg, ServiceCategory, PageMoveBtn, FavoriteBtn, PageMoveIcon, BtnName } from "pages/FattailPageCommon.styled";
import { Header } from "components/common/Header/Header";
import { Navigation } from "components/common/Navigation/Navigation";
import fattailPageGecko from "assets/geckoImg/fattailPageGecko.png";
import calculator from "assets/icon/calculator.png";
import presentation from "assets/icon/presentation.png";
import board from "assets/icon/board.png"
import diary from "assets/icon/diary.png"

const LeopardHome = () => {
  return (
    <div className="App">
      <Header />
      <GeckoContainer className="mainContainer">
        <GeckoPageTop>
          <GeckoPageTitleWrapper>
            <GeckoImg src={fattailPageGecko} alt="펫테일게코 이미지" />
            <GeckoPageTitle>레오파드 게코</GeckoPageTitle>
            <FavoriteBtn />
          </GeckoPageTitleWrapper>
          <GeckoPageDescription>"둥글고 통통한 몸집을 가지고 있고 소심한 성격을 가지고 있어요."</GeckoPageDescription>
        </GeckoPageTop>
        <ServiceCategory>
            <Link to={"/fattail-calc"}>
              <PageMoveBtn type="button">
                <PageMoveIcon src={calculator} alt="계산기" />
                <BtnName>모프계산기</BtnName>
              </PageMoveBtn>
            </Link>
            <Link to={"/fattail-info"}>
              <PageMoveBtn type="button">
                <PageMoveIcon src={presentation} alt="모프소개" />
                <BtnName>모프소개</BtnName>
              </PageMoveBtn>
            </Link>
            <Link to={"/board"}>
              <PageMoveBtn type="button">
                <PageMoveIcon src={board} alt="게시판" />
                <BtnName>게시판</BtnName>
              </PageMoveBtn>
            </Link>
            <Link to={"/Diary"}>
              <PageMoveBtn type="button">
                <PageMoveIcon src={diary} alt="다이어리" />
                <BtnName>다이어리</BtnName>
              </PageMoveBtn>
            </Link>
        </ServiceCategory>
      </GeckoContainer>
      <Navigation/>
    </div>
  )
}

export default LeopardHome;