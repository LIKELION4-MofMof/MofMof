import { DivMorphCalc } from '../MorphCalc.styled';
import { useLocation } from 'react-router-dom';
import { CalPieChart } from './CalPieChart';
import HeaderVersion from '../../common/Header/HeaderVersion';
import { Navigation } from '../../common/Navigation/Navigation';
import styled from 'styled-components';
import { MorphDropdown } from './MorphDropdown';
import { ParentMorphCon } from './ParentMorphCon';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as RotateLeft } from '../../../assets/icon/rotateLeft.svg';

export default function CalResult() {
  const navigate = useNavigate();
  const location = useLocation();
  const { result, parentList1, parentList2 } = location.state;

  const data = result.map((item) => ({
    name: [...(item.visual || []), ...(item.hetName || [])],
    value: item.percent,
  }));

  console.log(result.length, '나 리절트야!!');

  return (
    <div className="App">
      <HeaderVersion title="모프 계산기 결과" isShare />
      <DivMorphCalc>
        <MorphDropdown />
        <ParentMorphCon parentList1={parentList1} parentList2={parentList2} />
        <Allcount>
          총 <span>{result.length}</span> 개의 결과가 나왔습니다.
        </Allcount>
        <CalPieChart data={data} />
        <ResultBox>
          <ResultTable>
            <ResultTableHead>
              <ResultTableHeadRow>
                <ResultTableHeadCol>확률</ResultTableHeadCol>
                <ResultTableHeadCol>유전자</ResultTableHeadCol>
                <ResultTableHeadCol>Combo</ResultTableHeadCol>
                <ResultTableHeadCol>/</ResultTableHeadCol>
              </ResultTableHeadRow>
            </ResultTableHead>
            <ResultTableBody>
              {result.map((item, index) => (
                <ResultTableBodyRow key={index}>
                  {/* <ResultTableBodyCol>{index + 1}</ResultTableBodyCol> */}
                  <ResultTableBodyCol>
                    {Math.floor(item.percent)}%
                  </ResultTableBodyCol>
                  {/* <ResultTableBodyCol>{item.hetName}</ResultTableBodyCol> */}
                  <ResultTableBodyCol>
                    {item.visual.map((item, id) => (
                      <Li key={id} isOdd={id % 2 === 0}>
                        {item}
                      </Li>
                    ))}
                    {item.hetName.map((item, id) => (
                      <Li key={id}>{item}</Li>
                    ))}
                  </ResultTableBodyCol>
                  <ResultTableBodyCol>
                    {item.visual.length + item.hetName.length}
                  </ResultTableBodyCol>
                  <ResultTableBodyCol>{item.percent2}</ResultTableBodyCol>
                </ResultTableBodyRow>
              ))}
            </ResultTableBody>
          </ResultTable>
          <Retrydiv>
            <RetryBtn onClick={() => navigate(-1)}>
              <RotateLeft
                style={{ position: 'relative', bottom: '2px', right: '5px' }}
              />
              다시 하기
            </RetryBtn>
          </Retrydiv>
        </ResultBox>
      </DivMorphCalc>
      <Navigation />
    </div>
  );
}

const Li = styled.li`
  border-radius: 10px;
  padding: 5px;
  display: inline-block;
  cursor: pointer;
  margin-right: 5px;
  margin-bottom: 5px;
  font-size: 15px;
  color: #fff;

  background-color: ${({ isOdd }) => (isOdd ? '#d9a61c' : '#fa806e')};
`;

const ResultBox = styled.div`
  text-align: center;
  font-size: 20px;
  margin-bottom: 110px;
`;
const ResultTable = styled.table`
  /* margin: 0 auto; */
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ff5500;
`;

const ResultTableHead = styled.thead`
  border: 1px solid #ff5500;
  &:nth-child(odd) {
    background-color: #ff5500;
  }
  color: #fff;
  font-weight: 500;
`;

const ResultTableHeadRow = styled.tr`
  border: 1px solid #000;
`;

const ResultTableHeadCol = styled.th`
  border: 1px solid #000;
  padding: 10px;
  &:nth-child(2) {
    width: 800px;
  }
  &:nth-child(3) {
    width: 70px;
  }
`;

const ResultTableBody = styled.tbody`
  border: 1px solid #000;
`;

const ResultTableBodyRow = styled.tr`
  border: 1px solid #000;
  text-align: center;
`;

const ResultTableBodyCol = styled.td`
  border: 1px solid #000;
  padding: 10px;

  background-color: #fff;
  text-align: center;
  vertical-align: middle;
  margin: 0;
  &:nth-child(odd) {
    background-color: #fde2d9;
  }
`;

const RetryBtn = styled.button`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 157px;
  height: 40px;
  margin-bottom: 70px;
  border-radius: 10px;
  position: fixed;
  bottom: 0;
  background-color: #ffff;
  color: #f26a3b;
  border: 1.5px solid #f26a3b;
  &:hover {
    background-color: #f26a3b;
    color: #fff;
  }
`;

const Allcount = styled.div`
  font-size: 20px;
  font-weight: 500;

  span {
    font-size: 25px;
    font-weight: 700;
    color: #ff5500;
  }
`;

const Retrydiv = styled.div`
  display: flex;
  justify-content: center;
`;
