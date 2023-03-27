// import FattailHome from 'pages/FattailHome/FattailHome';
import './App.css';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Layout from './components/common/Layout/Layout';
import Main from './components/main/Main';

import { Header } from 'components/common/Header/Header';
import { Navigation } from 'components/common/Navigation/Navigation';
import { React, useEffect, useState } from 'react';
import { ReactComponent as Splash } from './assets/icon/splash.svg';



function App() {
  // 로딩 상태 초기 값은 false
  const [isLoding, setIsLoading] = useState(false);

  // 마운트 이후, 이펙트 콜백 함수 실행
  useEffect(() => {
    // 스플래시 이미지 표시 여부 값 가져오기
    // JSON.parse 메서드를 사용해야 JavaScript 값으로 변경 됨
    const isSplashShown = JSON.parse(localStorage.getItem('isSplashShown'));

    // 스플래시 이미지가 표시된 적이 없다면?
    if (!isSplashShown) {
      // 로딩 상태 값을 true로 변경 요청 (React가 추후 변경함)
      // 리-렌더링 후, 화면에 스플래시 이미지 표시 됨
      setIsLoading(true);
      // 3초 뒤에 콜백 함수 실행 됨
      setTimeout(() => {
        // 로컬 스토리지에 isSplashShown 값을 저장
        // JSON.stringify 메서드를 사용해야 문자(string) 값으로 변경 됨
        localStorage.setItem('isSplashShown', JSON.stringify(true));
        // 로딩 상태 값을 false로 변경 요청 (React가 추후 변경함)
        // 리-렌더링 후, 화면에서 스플래시 이미지 감춤
        setIsLoading(false);
      }, 3000);
    }
  }, []);
  return (
    <div className="App">
      {isLoding ? (
        <div className="splash">
          <div className="splasg_img">
            <Splash />
          </div>
        </div>
      ) : (
        <>
          <Header />
          <div className="mainContainer">
            <Main />
          </div>
          <Navigation />
        </>
      )}
    </div>
  );
}

export default App;
