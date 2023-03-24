import { Header } from 'components/common/Header/Header';
import { Navigation } from 'components/common/Navigation/Navigation';
import { db } from 'firebase-db/app';
import { collection, getDocs } from 'firebase/firestore';
import { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FattailMorphListItem from './FattailMorphListItem';
import {
  MorphInfoMain,
  MorphInfoSearchForm,
  MorphListUL,
} from './MorphInfo.styled';
import { ReactComponent as CloseIcon } from 'assets/icon/close.svg';
import { ReactComponent as SearchIcon } from 'assets/icon/searching.svg';

const MorphInfo = () => {
  const [morphList, setMorphList] = useState([]);
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
  console.log(morphList);
  return (
    <div className="App">
      <Header />
      <MorphInfoMain className="mainContainer">
        <MorphInfoSearchForm>
          {/* <label for="searchFatTailMorph">모프 소개 검색창</label> */}
          <input
            type="text"
            name="searchFatTailMorph"
            placeholder="모프를 검색해 보세요."
          />
          <button type="reset" className="btnReset" aria-label="입력값 지우기">
            <CloseIcon fill="#a7a6a5" />
          </button>
          <button type="submit" className="btnSubmit" aria-label="검색하기">
            <SearchIcon stroke="#ffffff" />
          </button>
        </MorphInfoSearchForm>
        <MorphListUL>
          {morphList.map((morph) => (
            <li key={morph.id}>
              <Link to="/">
                <FattailMorphListItem morph={morph} />
              </Link>
            </li>
          ))}
        </MorphListUL>
      </MorphInfoMain>
      <Navigation />
    </div>
  );
};

export default MorphInfo;
