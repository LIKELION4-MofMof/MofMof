import { Header } from 'components/common/Header/Header';
import { Navigation } from 'components/common/Navigation/Navigation';
import { db } from 'firebase-db/app';
import { doc, getDoc } from 'firebase/firestore';
import { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MorphDetail = () => {
  const params = useParams();
  console.log(params);
  const [morph, setMorph] = useState(null);
  useLayoutEffect(() => {
    (async () => {
      const docRef = doc(db, 'fat-tail-morph-list', params.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setMorph(docSnap.data());
      } else {
        console.log('No such document!');
      }
    })();
  }, [params.id]);
  console.log(morph);
  return (
    <div className="App">
      <Header />
      <div className="mainContainer">
        <div>모프 갤러리</div>
        <div>모프 이름 + 정보</div>
      </div>
      <Navigation />
    </div>
  );
};

export default MorphDetail;
