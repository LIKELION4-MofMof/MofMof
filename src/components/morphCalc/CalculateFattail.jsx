import { convertKorToEng, checkName, dfsCal } from './CalcFunc';

function What(parent1, parent2, tmpCol, tmpRow) {
  for (let i = 0; i < parent1.length; i += 2) {
    tmpCol.push(parent1[i] + parent1[i + 1]);
  }
  for (let i = 0; i < parent2.length; i += 2) {
    tmpRow.push(parent2[i] + parent2[i + 1]);
  }
}

//퍼넷 스퀘어 함수
function punettSquare(calRes, col, row) {
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

  //문자열 정렬해줌 대문자 알파벳부터 소문자 알파벳으로
  for (let i = 0; i < calRes.length; i++) {
    calRes[i] = calRes[i].split('').sort().join('');
  }
}

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

  What(parent1, parent2, tmpCol, tmpRow);

  // console.log('tmpcol:', tmpCol);
  // console.log('tmpRow', tmpRow);
  col = dfsCal(tmpCol, [], '', tmpCol.length); //dfs를 하면 [aa]는 a,a  [bb na]는 bn ba bn ba 이렇게 나옴
  row = dfsCal(tmpRow, [], '', tmpRow.length);

  console.log('dfsCol입니다', col);
  console.log('dfsRow입니다', row);
  console.log('일반 퍼넷스퀘어 결과값', calRes);

  // punnett square 계산
  punettSquare(calRes, col, row);

  console.log('정렬한 퍼넷스퀘어', calRes);

  let traitList = [];

  //중복검사 및 카운트 +
  for (let i = 0; i < calRes.length; i++) {
    // 처음에 리스트에 없으면 추가
    if (traitList.length === 0) {
      traitList.push({
        alphaCode: calRes[i],
        engName: '',
        percent: 0,
        count: 1,
      });
    } else {
      // 중복 카운터
      let flag = false;
      for (let j = 0; j < traitList.length; j++) {
        if (traitList[j].alphaCode === calRes[i]) {
          traitList[j].count += 1;
          flag = true;
          break;
        }
      }
      // 중복이 아니면 추가
      if (!flag) {
        traitList.push({
          alphaCode: calRes[i],
          engName: '',
          count: 1,
          percent: 0,
        });
      }
    }
  }

  console.log(traitList);

  // geneList1, geneList2 중복 제거, 알파벳과 이름 매치시키기 위해
  let mixGeneList = [];
  let hetGeneList = [];
  let totalLength = calRes.length;

  geneList1.forEach((item) => {
    mixGeneList.push(item);
  });
  geneList2.forEach((item) => {
    let flag = false;
    for (let i = 0; i < mixGeneList.length; i++) {
      if (mixGeneList[i].engName === item.engName) {
        flag = true;
      }
    }
    if (flag === false) {
      mixGeneList.push(item);
    }
  });

  console.log('믹스제네리스트', mixGeneList);

  mixGeneList.forEach((item) => {
    if (item.type === 'recessive') {
      if (hetGeneList === []) {
        hetGeneList.push({
          engName: item.engName,
          alphaCode: item.alphaCode,
          character: item.character,
        });
      } else {
        hetGeneList.push(item);
      }
    }
  });
  console.log(hetGeneList);

  // 알파벳 이름으로 매치(character, het 붙이기)
  for (let i = 0; i < traitList.length; i++) {
    let tmp = [];
    let maxLength = traitList[i].alphaCode.length;

    for (let j = 0; j < maxLength; j++) {
      //3 ? aab면 다 돌음
      for (let k = 0; k < mixGeneList.length; k++) {
        //오레오카라멜 -> 길이는 2 , 객체형태이기 때문에
        if (traitList[i].alphaCode[j] === mixGeneList[k].alphaCode) {
          //
          // character and 우성
          // 하나가 대문자 이면
          if (
            traitList[i].alphaCode[j] ===
            traitList[i].alphaCode[j].toUpperCase()
          ) {
            // 우성에서 마지막 알파벳이면
            if (
              maxLength === j + 1 ||
              traitList[i].alphaCode[j] !== traitList[i].alphaCode[j + 1]
            ) {
              tmp.push(mixGeneList[k].engName);
              break;
            }
            // 우성 대문자 두개면
            // else if (
            //   traitList[i].alphaCode[j] === traitList[i].alphaCode[j + 1]
            // ) {
            //   tmp.push('Super ' + mixGeneList[k].engName);
            //   j += 1;
            //   break;
            // }
            // 우성 대문자 하고 뒤에 'N' 이면
            else if (traitList[i].alphaCode[j + 1] === 'N') {
              tmp.push(mixGeneList[k].engName);
              j += 1;
              break;
            }
          }
          // 발현되는 열성
          else if (
            traitList[i].alphaCode[j + 1] !== null &&
            traitList[i].alphaCode[j] === traitList[i].alphaCode[j + 1]
          ) {
            tmp.push(mixGeneList[k].engName);
            j += 1;
            break;
          }
        }
      }
    }
    // console.log("tmp입니다@@", tmp);
    traitList[i].engName = tmp;
  }

  console.log('tmp넣은 거', traitList);

  // 발현되는 모프 별로 분류 및 대표 인덱스 찾기 ex) morphList = { {engName: "Oreo;Stipe", "allCount": 3}, {engName: "Stripe", "allCount": 3} }
  let morphList = [
    {
      visual: traitList[0].engName,
      hetName: [],
      alphaCode: traitList[0].alphaCode,
      allCount: traitList[0].count,
      percent: '',
      percent2: '',
    },
  ];
  let morphIndex = [0];
  let traitListLength = traitList.length;

  // 맨처음 나오는 모프 넣어 준다.
  // visual 이름이 같으면 allCount 더해주고, 다르면 morphList에 추가
  // 대표 모프 인덱스 찾기
  for (let i = 1; i < traitListLength; i++) {
    let flag = false;

    for (let j = 0; j < morphList.length; j++) {
      // visual에 있는 리스트 모든 이름이 같으면 allCount 더해주고, 다르면 morphList에 추가
      let visualLength = morphList[j].visual.length;
      let traitLength = traitList[i].engName.length;
      let count = 0;
      for (let k = 0; k < visualLength; k++) {
        for (let l = 0; l < traitLength; l++) {
          if (morphList[j].visual[k] === traitList[i].engName[l]) {
            count += 1;
          }
        }
      }
      if (count === visualLength && count === traitLength) {
        morphList[j].allCount += traitList[i].count;
        flag = true;
        break;
      }
    }
    if (flag === false) {
      morphList.push({
        visual: traitList[i].engName,
        hetName: '',
        alphaCode: traitList[i].alphaCode,
        allCount: traitList[i].count,
        percent: '',
      });
      morphIndex.push(i);
    }
  }

  console.log(morphList);
  console.log(traitList);

  // 대표 모프 het 계산
  // 대표 모프 뽑기 (여기서 hetGeneList 사용), hetGeneList 사용할 필요가 없나?
  let traitMaxLength = traitList.length;
  for (let i = 0; i < morphIndex.length; i++) {
    let tmpHet = [];
    let het100 = [];
    let het66 = [];
    let het50 = [];
    let alphaMaxLength = traitList[morphIndex[i]].alphaCode.length;

    // 대표 모프 알파벳 코드에서 het 계산
    for (let k = 0; k < alphaMaxLength; k++) {
      // 소문자일 경우
      if (
        traitList[morphIndex[i]].alphaCode[k] !==
        traitList[morphIndex[i]].alphaCode[k].toUpperCase()
      ) {
        // 소문자, 다음 알파벳이 같지 않은 경우 예) aa 인 경우 한번더 건너 뛴다.
        if (
          k + 1 !== alphaMaxLength &&
          traitList[morphIndex[i]].alphaCode[k] ===
            traitList[morphIndex[i]].alphaCode[k + 1]
        ) {
          k += 1;
        }
        // 마지막 문자인 경우인데 n 이 아닌 경우
        else if (traitList[morphIndex[i]].alphaCode[k] !== 'n') {
          let tmpAlphaCode = traitList[morphIndex[i]].alphaCode[k];
          let tmpCount = 0;
          let tmpTotalCount = 0;

          // het열성, 모든 유전자유형 모프에서 확률 계산
          for (let j = 0; j < traitMaxLength; j++) {
            // 발현되지 않은 모프유형에서, %Het =  해당 알파벳이 있는 개수 / 발현되지 않은 모프유형의 총 개수
            if (
              traitList[j].alphaCode.includes(tmpAlphaCode + tmpAlphaCode) ===
              true
            ) {
              continue;
            } else if (traitList[j].alphaCode.includes(tmpAlphaCode)) {
              tmpCount += traitList[j].count;
              tmpTotalCount += traitList[j].count;
            } else {
              tmpTotalCount += traitList[j].count;
            }
          }
          // %Het 계산
          tmpHet.push({
            alphaCode: tmpAlphaCode,
            het: Math.round((tmpCount / tmpTotalCount) * 100),
          });
        }
      }
    }

    // %Het 100, 66, 50 분류
    tmpHet.forEach((item) => {
      // console.log(item.het);
      hetGeneList.forEach((hetGene) => {
        if (item.alphaCode === hetGene.alphaCode) {
          if (item.het === 100) {
            het100.push('헷' + hetGene.engName);
          } else if (item.het === 67) {
            het66.push('66% 헷 ' + hetGene.engName);
          } else if (item.het === 50) {
            het50.push('50% 헷 ' + hetGene.engName);
          }
        }
      });
    });

    // console.log(het100);
    // console.log(het66);
    // console.log(het50);
    // het 100, 66, 50 순서대로 리스트 이어 붙이기
    morphList[i].hetName = [...het100, ...het66, ...het50];
  }

  // 각 콤보 모프 확률 계산
  for (let i = 0; i < morphList.length; i++) {
    morphList[i].percent = (morphList[i].allCount / totalLength) * 100;
  }

  function fraction(percent) {
    // 분수의 분자와 분모를 구하기 위해 최대공약수를 구함
    function gcd(a, b) {
      if (b === 0) {
        return a;
      }
      return gcd(b, a % b);
    }

    const denominator = 100;
    const numerator = percent;
    const divisor = gcd(numerator, denominator);

    return `${numerator / divisor}/${denominator / divisor}`;
  }

  for (let i = 0; i < morphList.length; i++) {
    morphList[i].percent2 = fraction(morphList[i].percent);
  }

  setResult(morphList); // morphList는 리스트로 받아와야 한다.
};
