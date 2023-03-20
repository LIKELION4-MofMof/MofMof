import { convertKorToEng, checkName } from './CalcFunc';

export const calculate = (gene1, gene2, setResult) => {
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
  let geneList1 = null;
  let geneList2 = null;
  let parent1;
  let parent2;
  let alphaValues = {
    uppercase: 65,
    lowercase: 97,
  };

  console.log('값 영어로 변환 :', geneEng1, geneEng2);

  geneList1 = checkName(geneEng1, alphaValues);
  geneList2 = checkName(geneEng2, alphaValues);

  console.log('유전자에 맞게 값 할당 ', geneList1, geneList2);
};
