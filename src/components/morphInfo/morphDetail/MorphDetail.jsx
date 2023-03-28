import HeaderVersion from 'components/common/Header/HeaderVersion';
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
  const [arrayIndex, setArrayIndex] = useState(0);

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

  const imgHandler = (e) => {
    if (e.target.className.includes('subImg')) {
      setArrayIndex(e.target.className.slice(7));
    } else return;
  };
  if (isLoading) {
    return <div role="alert">모프 상세 페이지 로딩 중...</div>;
  } else {
    return (
      <div className="App">
        <HeaderVersion title={morph.name} isShare />
        <MorphDetailDev className="mainContainer">
          <ImgGallery onClick={imgHandler}>
            <img
              className="mainImg"
              src={morph.imgUrl[arrayIndex]}
              alt={morph.alt[arrayIndex]}
            />
            {morph.imgUrl.map((img, idx) => (
              <img
                className={`subImg ${idx}`}
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
