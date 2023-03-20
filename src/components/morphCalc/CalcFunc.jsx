import morphList from './morphList.json';

// 한국어 -> 영어로 변환
export const convertKorToEng = (inputList) => {
  const morphMap = new Map(
    morphList.map((morph) => [morph.korName, morph.engName]),
  );
  //JSON 모프 데이터를 Map을 통해 배열로 반환함 (한국이름과 영어이름을 가지고잇음)
  //다음 해야할일 inputList를 하나씩 돌려서 -> 순회해야함
  //돌면서 한국어가 morphList에 있는거라면 영어이름을 넣어주면될듯?
  return inputList.map((morph) => {
    let tmpEn = morph;
    for (const [korName, engName] of morphMap) {
      if (morph.includes(korName)) {
        tmpEn = engName;
        if (morph.includes('헷')) {
          tmpEn = 'Het' + engName;
        }
        break;
      }
    }
    return tmpEn;
  });
};

// input 리스트 받아서 있는 모프면 데이터 입력
export const checkName = (gene, alphaValues) => {
  let inputMorphList = [];
  let inputList = [];

  inputList = gene;

  if (inputList.length === 0) {
    inputMorphList.push({
      engName: 'Normal',
      alphaCode: 'N',
      type: 'dominant',
      character: 'Normal',
    });
  } else {
    for (let i = 0; i < inputList.length; i++) {
      morphList.forEach((item) => {
        // 우성 유전자
        if (item.engName === inputList[i] && item.type === 'dominant') {
          inputMorphList.push({
            // 영어 or 한글
            // "engName" : item.engName,
            engName: item.korName,
            alphaCode: String.fromCharCode(alphaValues.uppercase),
            type: item.type,
            character: '',
          });
          alphaValues.uppercase += 1;
          return;
        }
        // 열성 유전자
        else if (item.engName === inputList[i]) {
          inputMorphList.push({
            // 영어 or 한글
            // "engName" : item.engName,
            engName: item.korName,
            alphaCode: String.fromCharCode(alphaValues.lowercase),
            type: item.type,
            character: '',
          });

          alphaValues.lowercase += 1;
          return;
        }
        // super 유전자일 경우
        else if ('Super' + item.engName === inputList[i]) {
          inputMorphList.push({
            // 영어 or 한글
            // "engName" : item.engName,
            engName: item.korName,
            alphaCode: String.fromCharCode(alphaValues.uppercase),
            type: item.type,
            character: 'Super',
          });
          alphaValues.uppercase += 1;
          return;
        }
        // het 유전자일 경우
        else if ('Het' + item.engName === inputList[i]) {
          inputMorphList.push({
            // 영어 or 한글
            // "engName" : item.engName,
            engName: item.korName, //table에 나타낼 결과 이름이다.
            alphaCode: String.fromCharCode(alphaValues.lowercase),
            type: item.type,
            character: 'Het',
          });
          alphaValues.lowercase += 1;
          return;
        }
      });
    }
  }

  // 중복 제거, 예시) 오레오, 헷오레오 -> 헷오레오 제거
  let result = inputMorphList.filter((item1, idx1) => {
    return (
      inputMorphList.findIndex((item2, idx2) => {
        return item1.engName === item2.engName;
      }) === idx1
    );
  });
  return result;
};
