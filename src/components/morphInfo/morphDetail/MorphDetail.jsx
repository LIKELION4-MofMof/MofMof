import { Header } from 'components/common/Header/Header';
import { Navigation } from 'components/common/Navigation/Navigation';
import { db } from 'firebase-db/app';
import { doc, getDoc } from 'firebase/firestore';
import { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ImgGallery,
  MorphDetailDev,
  MorphInfoDetail,
} from './MorphDetail.styled';

const MorphDetail = () => {
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [morph, setMorph] = useState(null);
  useLayoutEffect(() => {
    (async () => {
      const docRef = doc(db, 'fat-tail-morph-list', params.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setMorph(docSnap.data());
        setIsLoading(false);
      } else {
        console.log('No such document!');
        setIsLoading(false);
      }
    })();
  }, [params.id]);
  if (isLoading) {
    return <div role="alert">모프 상세 페이지 로딩 중...</div>;
  } else {
    return (
      <div className="App">
        <Header />
        <MorphDetailDev className="mainContainer">
          <ImgGallery>
            <img className="mainImg" src={morph.imgUrl[0]} alt={morph.alt[0]} />
            {morph.imgUrl.map((img, idx) => (
              <img
                className="subImg"
                key={idx}
                src={img}
                alt={morph.alt[idx]}
              />
            ))}
          </ImgGallery>
          <MorphInfoDetail>
            <span className="morphName">{morph.name}</span>
            <span className="morphInfo">{morph.info}</span>
          </MorphInfoDetail>
        </MorphDetailDev>
        <Navigation />
      </div>
    );
  }
};

export default MorphDetail;
