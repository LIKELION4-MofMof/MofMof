import styled from 'styled-components';
import { ReactComponent as Heart } from '../../../assets/icon/heart.svg';

export function ParentMorphCon({ parentList1, parentList2 }) {
  console.log(parentList1, parentList2);

  return (
    <ParentCon>
      <FatherCon>
        <FatherHead>아빠</FatherHead>
        <Fathermorphdiv>
          {parentList1.map((item, index) => (
            <MorphSpan index={index}>{item}</MorphSpan>
          ))}
        </Fathermorphdiv>
      </FatherCon>
      <Heart style={{ position: 'relative', top: '10px', left: '155px' }} />

      <MommyCon>
        <MommyHead>엄마</MommyHead>
        <Mathermorphdiv>
          {parentList2.map((item, index) => (
            <MorphSpan index={index}>{item}</MorphSpan>
          ))}
        </Mathermorphdiv>
      </MommyCon>
    </ParentCon>
  );
}

const ParentCon = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 10px;
  /* border: 2px solid #ff5500; */
  width: 100%;
  height: fit-content;
  border-radius: 10px;
  /* margin-bottom: 100px; */
`;

const FatherCon = styled.div`
  width: 100%;
  border: 1px dotted #ff5500;
  /* background-color: #fde2d9; */
  height: auto;
  border-radius: 10px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const MommyCon = styled.div`
  border: 1px dotted #ff5500;
  /* background-color: #fde2d9; */

  flex-direction: column;
  display: flex;
  position: relative;
  top: 20px;
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 60px;
  text-align: center;
  justify-content: center;
  gap: 20px;
  align-items: center;
`;

const FatherHead = styled.p`
  display: block;
  top: 5px;
  /* position: absolute; */
  left: 125px;
  border: 1px solid #ffff;
  color: #ffff;
  background-color: #ff5500;
  width: 100%;
  height: 20px;
  border-radius: 10px;
  line-height: 20px; /* height와 같은 값으로 설정 */
  text-align: center;
  font-size: 15px;
`;

const Fathermorphdiv = styled.div`
  /* position: absolute; */

  width: 250px;
  height: auto;
  line-height: 40px;
  border-radius: 10px;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 600;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Mathermorphdiv = styled.div`
  top: 40px;
  /* position: absolute; */
  left: 40px;
  width: 250px;
  height: auto;
  line-height: 40px;
  border-radius: 10px;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 600;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const MommyHead = styled.p`
  display: block;
  top: 5px;
  /* position: absolute; */
  left: 125px;
  border: 1px solid #ffff;
  color: #ffff;
  background-color: #ff5500;
  width: 100%;
  height: 20px;
  border-radius: 10px;
  line-height: 20px; /* height와 같은 값으로 설정 */
  text-align: center;
  font-size: 15px;
`;

const MorphSpan = styled.span`
  top: 5px;
  border: 1px solid #ffff;
  color: #ffff;
  background-color: ${(props) =>
    props.index % 2 === 0 ? '#fa806e' : '#d9a61c'};

  padding: 4px;
  height: auto;
  width: auto;
  border-radius: 10px;
  line-height: 20px; /* height와 같은 값으로 설정 */
  text-align: center;
  font-size: 15px;
  flex-basis: calc(
    33.33% - 6.67px
  ); /* 3개의 요소를 한 줄에 배치하기 위해 너비 조정 */
  margin-bottom: 7px;
`;
