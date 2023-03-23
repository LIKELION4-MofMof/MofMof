import { Header } from 'components/common/Header/Header';
import { Navigation } from 'components/common/Navigation/Navigation';
import { db } from 'firebase-db/app';
import { collection, getDocs } from 'firebase/firestore';
import { useLayoutEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FattailMorphListItem from './FattailMorphListItem';
import { MorphInfoMain, MorphListUL } from './MorphInfo.styled';

const MorphInfo = () => {
  const [morphList, setMorphList] = useState([]);
  useLayoutEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(
        collection(db, 'fat-tail-morph-list'),
      );
      console.log(querySnapshot);
      let docsData = [];
      querySnapshot.forEach((doc) => {
        docsData.push({ id: doc.id, ...doc.data() });
      });
      setMorphList(docsData);
    })();
  }, []);
  console.log(morphList);
  return (
    <div className="App">
      <Header />
      <MorphInfoMain className="mainContainer">
        <section>
          <MorphListUL>
            {morphList.map((morph) => (
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
