import { Header } from 'components/common/Header/Header';
import { Navigation } from 'components/common/Navigation/Navigation';
import {} from './MorphInfo.styled';

const MorphInfo = () => {
  return (
    <div className="App">
      <Header />
      <main className="mainContainer">모프소개 페이지</main>
      <Navigation />
    </div>
  );
};

export default MorphInfo;
