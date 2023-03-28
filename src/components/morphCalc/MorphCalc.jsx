import MorphInputContainer from './morphInputContainer/MorphInputContainer';
import { ReactComponent as Mate } from 'assets/icon/close.svg';
import { useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { calculate } from './CalculateFattail';
import { Navigation } from '../common/Navigation/Navigation';
import SelectedBtn from 'components/morphCalc/morphInputContainer/SelectedBtn';

import {
  BtnCalc,
  DivMorphCalc,
  MorphCalcBtnContainer,
} from './MorphCalc.styled';
import HeaderVersion from 'components/common/Header/HeaderVersion';

const MorphCalc = () => {
  const [FSelectedMorph, setFSelectedMorph] = useState([]);
  const [MSelectedMorph, setMSelectedMorph] = useState([]);
  const parentList1 = [];
  const parentList2 = [];
  const [result, setResult] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (result.length > 0) {
      navigate('/fattail-calcResult', {
        state: {
          result,
          parentList1,
          parentList2,
        },
      });
    }
  }, [navigate, result]);

  const insertFSelectedBox = useCallback(
    (newSelectedMorph) => {
      FSelectedMorph.length === 5
        ? alert('모프 입력은 5개까지만 가능합니다.')
        : FSelectedMorph.filter((morph) => morph.id === newSelectedMorph.id)
            .length === 0
        ? setFSelectedMorph(FSelectedMorph.concat(newSelectedMorph))
        : alert('이미 선택한 모프입니다.');
    },
    [FSelectedMorph],
  );
  const removeFSelectedBox = useCallback(
    (cancleMorph) => {
      setFSelectedMorph(
        FSelectedMorph.filter((morph) => morph.id !== cancleMorph.id),
      );
    },
    [FSelectedMorph],
  );
  const insertMSelectedBox = useCallback(
    (newSelectedMorph) => {
      MSelectedMorph.length === 5
        ? alert('모프 입력은 5개까지만 가능합니다.')
        : MSelectedMorph.filter((morph) => morph.id === newSelectedMorph.id)
            .length === 0
        ? setMSelectedMorph(MSelectedMorph.concat(newSelectedMorph))
        : alert('이미 선택한 모프입니다.');
    },
    [MSelectedMorph],
  );
  const removeMSelectedBox = useCallback(
    (cancleMorph) => {
      setMSelectedMorph(
        MSelectedMorph.filter((morph) => morph.id !== cancleMorph.id),
      );
    },
    [MSelectedMorph],
  );

  FSelectedMorph.map((morph) => parentList1.push(morph.korName));
  MSelectedMorph.map((morph) => parentList2.push(morph.korName));

  const resetSelectedMorph = () => {
    setFSelectedMorph([]);
    setMSelectedMorph([]);
  };
  return (
    <div className="App">
      <HeaderVersion title="펫테일게코 모프계산기" isShare />
      <DivMorphCalc>
        <MorphInputContainer title={'아빠'} insert={insertFSelectedBox}>
          {FSelectedMorph.map((morph) => (
            <li key={morph.id}>
              <SelectedBtn morph={morph} remove={removeFSelectedBox} />
            </li>
          ))}
        </MorphInputContainer>
        <Mate />
        <MorphInputContainer title={'엄마'} insert={insertMSelectedBox}>
          {MSelectedMorph.map((morph) => (
            <li key={morph.id}>
              <SelectedBtn morph={morph} remove={removeMSelectedBox} />
            </li>
          ))}
        </MorphInputContainer>
        <MorphCalcBtnContainer>
          <BtnCalc
            onClick={() => calculate(parentList1, parentList2, setResult)}
          >
            계산하기
          </BtnCalc>
          <BtnCalc reset={true} type="button" onClick={resetSelectedMorph}>
            전체삭제
          </BtnCalc>
        </MorphCalcBtnContainer>
      </DivMorphCalc>
      <Navigation />
    </div>
  );
};

export default MorphCalc;
