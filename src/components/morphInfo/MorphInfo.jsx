import React from 'react';
import { MorphInfoWrap, MorphInfoTop, MorphInfoBackButton, InputTest } from "./MorphInfo.styled";
// 3개 까지 한 파일?

export function MorphInfo() {
  return (
    <MorphInfoWrap>
      {/* 헤더 버튼 */}
      <MorphInfoTop>
        <MorphInfoBackButton></MorphInfoBackButton>
        펫테일게코 모프소개
      </MorphInfoTop>

      <article>
        {/* 검색창 */}
        <form>
          <InputTest />
          <label></label>
        </form>

        {/* 리스트 */}
        <div>
          <img />
          <span>모프 종류</span>
          <span>모프 이름</span>
        </div>
      </article>
    </MorphInfoWrap>
  )
}

