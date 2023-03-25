import { Header } from 'components/common/Header/Header';
import { Navigation } from 'components/common/Navigation/Navigation';
import { db } from 'firebase-db/app';
import { collection, getDocs } from 'firebase/firestore';
import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MorphInfoMain,
  MorphInfoSearchForm,
  MorphListLi,
  MorphListUL,
  SearchContainer,
} from './MorphInfo.styled';
import { ReactComponent as CloseIcon } from 'assets/icon/close.svg';
import { ReactComponent as SearchIcon } from 'assets/icon/searching.svg';
import MorphListDropDown from './MorphListDropDown';
import MorphListItem from './MorphListItem';

const MorphInfo = () => {
  const [morphList, setMorphList] = useState([]);
  const [onDropDown, setOnDropDown] = useState(false);
  const searchContainerEl = useRef(null);

  useLayoutEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(
        collection(db, 'fat-tail-morph-list'),
      );
      console.log(querySnapshot);
      let docsData = [];
      querySnapshot.forEach((doc) => {
        docsData.push({ id: doc.id, ...doc.data() });
      });
      setMorphList(docsData);
    })();
  }, []);
  console.log('모프소개 페이지');

  const dropDownHandler = useCallback(() => {
    setOnDropDown(true);
  }, []);
  const closeDropDown = useCallback((e) => {
    !searchContainerEl.current.contains(e.target) && setOnDropDown(false);
  }, []);
  return (
    <div className="App">
      <Header />
      <MorphInfoMain className="mainContainer" onClick={closeDropDown}>
        <SearchContainer ref={searchContainerEl}>
          <MorphInfoSearchForm>
            {/* <label for="searchFatTailMorph">모프 소개 검색창</label> */}
            <input
              type="text"
              name="searchFatTailMorph"
              placeholder="모프를 검색해 보세요."
              onFocus={dropDownHandler}
            />
            <button
              type="reset"
              className="btnReset"
              aria-label="입력값 지우기"
            >
              <CloseIcon fill="#a7a6a5" />
            </button>
            <button type="submit" className="btnSubmit" aria-label="검색하기">
              <SearchIcon stroke="#ffffff" />
            </button>
          </MorphInfoSearchForm>
          {onDropDown && <MorphListDropDown morphList={morphList} />}
        </SearchContainer>
        <MorphListUL>
          {morphList.map((morph) => (
            <MorphListLi key={morph.id}>
              <Link to="/">
                <MorphListItem morph={morph} />
              </Link>
            </MorphListLi>
          ))}
        </MorphListUL>
      </MorphInfoMain>
      <Navigation />
    </div>
  );
};

export default MorphInfo;
