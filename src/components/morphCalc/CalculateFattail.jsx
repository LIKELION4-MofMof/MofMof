import { convertKorToEng, checkName, dfsCal } from './CalcFunc';

//모프 객체에 맞는 유전자 합성
function geneDNA(parent1, parent2, geneList1, geneList2) {
  let parentName1 = [];

  parent1 = geneList1
    .map((item, idx) => {
      parentName1.push(item.engName); //모프이름 들어감
      const checkUpperLower = item.alphaCode;
      const checkChar = item.character;

      if (checkUpperLower === checkUpperLower.toUpperCase()) {
        return checkUpperLower + 'N';
      } else {
        if (checkChar === 'Het') {
          return checkUpperLower + 'n';
        } else {
          return checkUpperLower + checkUpperLower;
        }
      }
    })
    .toString(); //[aa]를 aa로 문자열로 만들어줌
  parent1 = parent1.replace(/,/g, '');
  console.log('페런츠1입니다', parent1);

  let parentsName2 = [];
  parent2 = geneList2
    .map((item, index) => {
      parentsName2.push(item.engName);

      const checkUpperLower = item.alphaCode;
      const checkChar = item.character;

      if (checkUpperLower === checkUpperLower.toUpperCase()) {
        return checkUpperLower + 'N';
      } else {
        if (checkChar === 'Het') {
          return checkUpperLower + 'n';
        } else {
          return checkUpperLower + checkUpperLower;
        }
      }
    })
    .toString();
  parent2 = parent2.replace(/,/g, '');
  // console.log('페런츠2입니다', parent2);
  // console.log('ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ?', parentName1);
  // console.log(parentsName2);

  return [parent1, parent2];
}

export const calculate = (gene1, gene2, setResult) => {
  let geneList1 = null;
  let geneList2 = null;
  let parent1;
  let parent2;
  let alphaValues = {
    uppercase: 65,
    lowercase: 97,
  };
  let tmpCol = [];
  let tmpRow = [];
  let col = [];
  let row = [];
  //예외처리
  if (gene1.length === 0 || gene2.length === 0) {
    alert('모프를 입력해주세요');
    return;
  }

  console.log('주희님 인풋에서 들어온값 :', gene1, gene2);

  //부리스트 한국어면 영어로 바꿈
  let geneEng1 = convertKorToEng(gene1);
  let geneEng2 = convertKorToEng(gene2);

  //한국어일때만 이함수에 들어가게 해야할거같은데 조건문 처리를 해야할듯 싶다

  console.log('값 영어로 변환 :', geneEng1, geneEng2);

  geneList1 = checkName(geneEng1, alphaValues);
  geneList2 = checkName(geneEng2, alphaValues);

  console.log('유전자에 맞게 값 할당 ', geneList1, geneList2);

  //부모리스트 끼리 서로 검사하여 중복값이 있다면 같은 알파벳으로 설정해줌
  geneList2.forEach((gene2) => {
    const matchingGene = geneList1.find(
      (gene1) => gene1.engName === gene2.engName,
    );
    if (matchingGene) {
      gene2.alphaCode = matchingGene.alphaCode;
    }
  });

  //유전자 조합
  [parent1, parent2] = geneDNA(parent1, parent2, geneList1, geneList2);

  //현재 유전자 aa bb na
  //퍼넷스퀘어 계산 할때의 열과 행에 들어갈 유전자 배열만들기

  let calRes = [];

  for (let i = 0; i < parent1.length; i += 2) {
    tmpCol.push(parent1[i] + parent1[i + 1]);
  }
  for (let i = 0; i < parent2.length; i += 2) {
    tmpRow.push(parent2[i] + parent2[i + 1]);
  }

  // console.log('tmpcol:', tmpCol);
  // console.log('tmpRow', tmpRow);
  col = dfsCal(tmpCol, [], '', tmpCol.length); //dfs를 하면 [aa]는 a,a  [bb na]는 bn ba bn ba 이렇게 나옴
  row = dfsCal(tmpRow, [], '', tmpRow.length);

  console.log('dfsCol입니다', col);
  console.log('dfsRow입니다', row);

  // punnett square 계산
  for (let i = 0; i < col.length; i++) {
    for (let j = 0; j < row.length; j++) {
      let tmp = '';
      for (let k = 0; k < col[i].length; k++) {
        tmp += col[i][k];
      }
      for (let k = 0; k < row[j].length; k++) {
        tmp += row[j][k];
      }
      calRes.push(tmp);
    }
  }

  console.log('일반 퍼넷스퀘어 결과값', calRes);

  //문자열 정렬해줌 대문자 알파벳부터 소문자 알파벳으로
  for (let i = 0; i < calRes.length; i++) {
    calRes[i] = calRes[i].split('').sort().join('');
  }
  console.log('정렬한 퍼넷스퀘어', calRes);
};
