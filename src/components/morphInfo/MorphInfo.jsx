import { Header } from 'components/common/Header/Header';
import { Navigation } from 'components/common/Navigation/Navigation';
import { Link } from 'react-router-dom';
import FattailMorphListItem from './FattailMorphListItem';
import { MorphInfoMain, MorphListUL } from './MorphInfo.styled';

const fattailMorphList = [
  {
    id: 'ft1',
    group: '단일',
    name: '노말',
    img: ['assets/fattail-morph-image/fattailNormal1.png'],
    alt: ['첫번째 사진에 대한 설명'],
    detail: '노말에 대한 설명입니다.',
  },
  {
    id: 'ft2',
    group: '2콤보',
    name: '고스트',
    img: [
      'assets/fattail-morph-image/fattailGhost1.png',
      'assets/fattail-morph-image/fattailGhost2.png',
      'assets/fattail-morph-image/fattailGhost3.png',
      'assets/fattail-morph-image/fattailGhost4.png',
      'assets/fattail-morph-image/fattailGhost5.png',
    ],
    alt: [
      '첫번째 사진 설명',
      '두번째 사진 설명',
      '세번째 사진 설명',
      '네번째 사진 설명',
      '다섯번째 사진 설명',
    ],
    detail:
      '펫테일게코가 탈피 할 때의 색처럼 회색빛이라 고스트 라는 이름이 생겼다.',
  },
  {
    id: 'ft3',
    group: '단일',
    name: '카라멜',
    img: ['assets/fattail-morph-image/fattailNormal1.png'],
    alt: ['첫번째 사진에 대한 설명'],
    detail: '노말에 대한 설명입니다.',
  },
  {
    id: 'ft4',
    group: '2콤보',
    name: '아멜라니스틱',
    img: [
      'assets/fattail-morph-image/fattailGhost1.png',
      'assets/fattail-morph-image/fattailGhost2.png',
      'assets/fattail-morph-image/fattailGhost3.png',
      'assets/fattail-morph-image/fattailGhost4.png',
      'assets/fattail-morph-image/fattailGhost5.png',
    ],
    alt: [
      '첫번째 사진 설명',
      '두번째 사진 설명',
      '세번째 사진 설명',
      '네번째 사진 설명',
      '다섯번째 사진 설명',
    ],
    detail:
      '펫테일게코가 탈피 할 때의 색처럼 회색빛이라 고스트 라는 이름이 생겼다.',
  },
];

const MorphInfo = () => {
  return (
    <div className="App">
      <Header />
      <MorphInfoMain className="mainContainer">
        <section>
          <MorphListUL>
            {fattailMorphList.map((morph) => (
              <li key={morph.id}>
                <Link to="/">
                  <FattailMorphListItem morph={morph} />
                </Link>
              </li>
            ))}
          </MorphListUL>
        </section>
      </MorphInfoMain>
      <Navigation />
    </div>
  );
};

export default MorphInfo;
