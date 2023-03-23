import { DivMorphCalc } from '../MorphCalc.styled';
import { useLocation } from 'react-router-dom';
import { CalPieChart } from './CalPieChart';
import { Header } from '../../common/Header/Header';
import { Navigation } from '../../common/Navigation/Navigation';
import styled from 'styled-components';
import { MorphDropdown } from './MorphDropdown';
import { ParentMorphCon } from './ParentMorphCon';

export default function CalResult() {
  const location = useLocation();
  const { result, parentList1, parentList2 } = location.state;

  const data = result.map((item) => {
    let visual = item.visual || [];
    let hetName = item.hetName || [];
    let combinedArr = [...visual, ...hetName];
    return {
      name: combinedArr, //그래프 명시되는 이름
      value: item.percent,
    };
  });

  console.log(result.length, '나 리절트야!!');

  return (
    <div className="App">
      <Header />
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
                  <ResultTableBodyCol>{item.percent}%</ResultTableBodyCol>
                  {/* <ResultTableBodyCol>{item.hetName}</ResultTableBodyCol> */}
                  <ResultTableBodyCol>
                    {item.visual.map((item, id) => (
                      <Li key={id}>{item}</Li>
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
          <RetryBtn>다시 하기</RetryBtn>
        </ResultBox>
      </DivMorphCalc>
      <Navigation />
    </div>
  );
}

const Li = styled.li`
  border: 1px solid black;
  padding: 2px;
  display: inline-block;
  cursor: pointer;
  margin-right: 5px;
`;

const ResultBox = styled.div`
  text-align: center;
  font-size: 20px;
`;
const ResultTable = styled.table`
  /* margin: 0 auto; */
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #000;
`;

const ResultTableHead = styled.thead`
  border: 1px solid #000;
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
  background-color: red;
  margin-bottom: 30px;
`;

const ResultTableBodyRow = styled.tr`
  border: 1px solid #000;
`;

const ResultTableBodyCol = styled.td`
  border: 1px solid #000;
  padding: 10px;
`;

const RetryBtn = styled.button`
  border: 1px solid #000;
  padding: 10px;
  width: 100px;
  height: 70px;
  margin-bottom: 50px;
`;

const Allcount = styled.div`
  font-size: 20px;
  font-weight: 500;

  span {
    font-size: 25px;
    font-weight: 700;
    color: #5f0bce;
  }
`;
