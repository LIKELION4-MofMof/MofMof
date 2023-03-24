import * as React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import { GeckoContainer, GeckoPageTop, GeckoPageTitleWrapper, GeckoPageTitle, GeckoPageDescription, GeckoImg, ServiceCategory, PageMoveBtn } from "pages/FattailPageCommon.styled";
// import geckoItems from '../data';

const CrestedHome = () => {
  // const {id} = useParams();
  // console.log(data);
  // console.log(props);
  // const [geckoItems, setGeckoItems] = useState(data);
  return (
    <GeckoContainer>
      <GeckoPageTop>
        <GeckoPageTitleWrapper>
          <GeckoPageTitle>크레스티드 게코</GeckoPageTitle>
          <GeckoPageDescription>"둥글고 통통한 몸집을 가지고 있고 소심한 성격을 가지고 있어요."</GeckoPageDescription>
        </GeckoPageTitleWrapper>
       <GeckoImg src="" alt="" />
      </GeckoPageTop>
      <ServiceCategory>
        <PageMoveBtn>
          <Link to={"/morph-calc"}>모프계산기</Link>
        </PageMoveBtn>
        <PageMoveBtn>
          <Link to={"/fattail-info"}>모프소개</Link>
        </PageMoveBtn>
        <PageMoveBtn>
          <Link to={"/fattail-info"}>게시판</Link>
        </PageMoveBtn>
        <PageMoveBtn>
          <Link to={"/fattail-info"}>다이어리</Link>
        </PageMoveBtn>
      </ServiceCategory>
    </GeckoContainer>
  )
}

export default CrestedHome;