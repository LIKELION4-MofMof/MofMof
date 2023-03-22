import * as React from 'react';
import { Link } from 'react-router-dom';

const FattailHome = () => {
  return (
    <div>
      <button>
        <Link to={'/fattail-calc'}>모프계산기</Link>
      </button>
      <button>
        <Link to={'/fattail-info'}>모프 소개 페이지 가기</Link>
      </button>
    </div>
  );
};

export default FattailHome;
