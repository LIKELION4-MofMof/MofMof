import HeaderVersion from 'components/common/Header/HeaderVersion';
import { Navigation } from 'components/common/Navigation/Navigation';

const MyPage = () => {
  return (
    <div className="App">
      <HeaderVersion title="마이페이지" />

      <button>마이페이지</button>

      <Navigation />
    </div>
  );
};

export default MyPage;
