import { db } from 'firebase-db/app';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MorphDetail = () => {
  const params = useParams();
  console.log(params);
  const [morph, setMorph] = useState(null);
  useEffect(() => {
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
  return <div>상세 페이지 입니다.</div>;
};

export default MorphDetail;
