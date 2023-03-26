import { Header } from 'components/common/Header/Header';
import { Navigation } from 'components/common/Navigation/Navigation';
import { db } from 'firebase-db/app';
import { collection, getDocs } from 'firebase/firestore';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import {
  FilterContainer,
  MorphInfoMain,
  MorphInfoSearchForm,
  MorphListLi,
  MorphListUL,
  SearchContainer,
} from './MorphInfo.styled';
import { ReactComponent as Arrow } from 'assets/icon/ArrowChevron.svg';
import { ReactComponent as SearchIcon } from 'assets/icon/searching.svg';
import MorphListDropDown from './MorphListDropDown';
import MorphListItem from './MorphListItem';

const MorphInfo = () => {
  const [morph, setMorph] = useState([]);
  const [morphList, setMorphList] = useState([]);
  const [dropDownList, setDropDownList] = useState([]);
  const [onDropDown, setOnDropDown] = useState(false);
  const searchContainerEl = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const inputEl = useRef(null);

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
      setMorph(docsData);
      setMorphList(docsData);
    })();
  }, []);
  console.log(morphList);

  const showdropDown = useCallback(() => {
    setOnDropDown(true);
  }, []);
  const changeInputValue = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  const filterDropDown = () => {
    if (inputValue !== '') {
      const filterMorph = morph.filter((morph) =>
        morph.name.includes(inputValue),
      );
      filterMorph.length === 0
        ? setDropDownList([{ id: 'none', name: '검색 결과가 없습니다.' }])
        : setDropDownList(filterMorph);
    } else {
      setDropDownList([...morph]);
    }
  };
  useEffect(filterDropDown, [inputValue, morph]);

  const dropDownHandler = () => {
    setOnDropDown(!onDropDown);
  };
  const searchMorph = useCallback(
    (e) => {
      e.preventDefault();
      setInputValue('');
      setOnDropDown(false);
      setMorphList(morph.filter((morph) => morph.name.includes(inputValue)));
      inputEl.current.blur();
    },
    [inputValue, morph],
  );
  const showAll = () => {
    setMorphList(morph);
  };
  const showSingle = () => {
    setMorphList(morph.filter((morph) => morph.group === '단일'));
  };
  const showTwoCombo = () => {
    setMorphList(morph.filter((morph) => morph.group === '2콤보'));
  };
  const showThreeCombo = () => {
    setMorphList(morph.filter((morph) => morph.group === '3콤보'));
  };

  return (
    <div className="App">
      <Header />
      <MorphInfoMain className="mainContainer">
        <SearchContainer ref={searchContainerEl}>
          <MorphInfoSearchForm onSubmit={searchMorph}>
            <label htmlFor="searchFatTailMorph">모프 소개 검색창</label>
            <input
              type="text"
              name="searchFatTailMorph"
              placeholder="모프를 검색해 보세요."
              onFocus={showdropDown}
              value={inputValue}
              onChange={changeInputValue}
              ref={inputEl}
            />
            <button
              type="button"
              className="btnDropDown"
              aria-label="모프 리스트 보기"
              onClick={dropDownHandler}
            >
              {onDropDown ? <Arrow className="isActive" /> : <Arrow />}
            </button>
            <button type="submit" className="btnSubmit" aria-label="검색하기">
              <SearchIcon stroke="#ffffff" />
            </button>
          </MorphInfoSearchForm>
          {onDropDown && <MorphListDropDown morphList={dropDownList} />}
        </SearchContainer>
        <FilterContainer>
          <button type="button" onClick={showAll}>
            전체
          </button>
          <button type="button" onClick={showSingle}>
            단일
          </button>
          <button type="button" onClick={showTwoCombo}>
            2콤보
          </button>
          <button type="button" onClick={showThreeCombo}>
            3콤보
          </button>
        </FilterContainer>
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
