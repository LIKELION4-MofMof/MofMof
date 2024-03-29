import { ReactComponent as Arrow } from 'assets/icon/ArrowChevron.svg';
import { ReactComponent as SearchIcon } from 'assets/icon/searching.svg';
import HeaderVersion from 'components/common/Header/HeaderVersion';
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
import { Grid } from 'react-virtualized';
import {
  FilterContainer,
  MorphInfoMain,
  MorphInfoSearchForm,
  MorphListLi,
  MorphListUL,
  SearchContainer,
} from './MorphInfo.styled';
import MorphListDropDown from './MorphListDropDown';
import MorphListItem from './MorphListItem';

const MorphList = ({ morphList }) => {
  if (morphList.length > 4) {
    const cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
      const newMorphList = [
        [morphList[0], morphList[1]],
        [morphList[2], morphList[3]],
        [morphList[4], morphList[5]],
        [morphList[6], morphList[7]],
        [morphList[8], morphList[9]],
        [morphList[10], morphList[11]],
        [morphList[12], morphList[13]],
      ];
      const morph = newMorphList[rowIndex][columnIndex];
      if (morph) {
        return (
          <Link
            to={`/fattail-morph/${morph.id}/${morph.name}`}
            key={key}
            style={style}
            className="morphLink"
          >
            <MorphListItem morph={morph} />
          </Link>
        );
      }

      return null;
    };

    return (
      <Grid
        cellRenderer={cellRenderer}
        columnCount={2}
        columnWidth={158}
        height={550}
        rowCount={Math.ceil(morphList.length / 2)}
        rowHeight={270}
        width={335}
      />
    );
  }

  return (
    <MorphListUL>
      {morphList.map((morph) => (
        <MorphListLi key={morph.id}>
          <Link to={`/fattail-morph/${morph.id}/${morph.name}`}>
            <MorphListItem morph={morph} />
          </Link>
        </MorphListLi>
      ))}
    </MorphListUL>
  );
};

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
      let docsData = [];
      querySnapshot.forEach((doc) => {
        docsData.push({ id: doc.id, ...doc.data() });
      });
      setMorph(docsData);
      setMorphList(docsData);
    })();
  }, []);

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

  const dropDownHandler = useCallback(() => {
    setOnDropDown(!onDropDown);
  }, [onDropDown]);
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
  const showAll = useCallback(() => {
    setMorphList(morph);
  }, [morph]);
  const showSingle = useCallback(() => {
    setMorphList(morph.filter((morph) => morph.group === '단일'));
  }, [morph]);
  const showTwoCombo = useCallback(() => {
    setMorphList(morph.filter((morph) => morph.group === '2콤보'));
  }, [morph]);
  const showThreeCombo = useCallback(() => {
    setMorphList(morph.filter((morph) => morph.group === '3콤보'));
  }, [morph]);

  return (
    <div className="App">
      <HeaderVersion title="펫테일게코 모프소개" isShare />
      <MorphInfoMain className="mainContainer">
        <SearchContainer ref={searchContainerEl}>
          <MorphInfoSearchForm onSubmit={searchMorph}>
            <label htmlFor="searchFatTailMorph" className="a11yHidden">
              모프 소개 검색창
            </label>
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
        <MorphList morphList={morphList} />
      </MorphInfoMain>
      <Navigation />
    </div>
  );
};

export default MorphInfo;
