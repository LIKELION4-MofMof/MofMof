import styled from 'styled-components';
import { ReactComponent as Heart } from '../../../assets/icon/heart.svg';

export function ParentMorphCon() {
  return (
    <ParentCon>
      <FatherCon>
        <p>아빠</p>
      </FatherCon>
      <Heart />
      <MommyCon>
        <p>엄마</p>
      </MommyCon>
    </ParentCon>
  );
}

const ParentCon = styled.div`
  border: 2px dotted #ff5500;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  margin-bottom: 30px;
`;

const FatherCon = styled.div`
  border: 2px dotted #ff5500;
  width: 100%;
  height: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
`;

const MommyCon = styled.div`
  border: 2px dotted #ff5500;
  width: 100%;
  height: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
`;
