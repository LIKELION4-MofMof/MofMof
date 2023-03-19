import styled from 'styled-components';
import MorphInputContainer from './morphInputContainer/MorphInputContainer';
import { ReactComponent as Mate } from 'assets/icon/close.svg';
import { useCallback, useState } from 'react';
import SelectedBtn from 'components/morphCalc/morphInputContainer/SelectedBtn';

const DivMorphCalc = styled.div`
  width: 375px;
  border: 1px solid black;
  border-radius: 10px;
  height: 100vh;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 8px;
`;

const MorphCalc = () => {
  const [FSelectedMorph, setFSelectedMorph] = useState([]);
  const [MSelectedMorph, setMSelectedMorph] = useState([]);

  // const [parentList1, setParentList1] = useState([]);
  // const [parentList2, setParentList2] = useState([]);
  const [result, setResult] = useState([]);

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

  console.log(FSelectedMorph);
  console.log(MSelectedMorph);

  return (
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
    </DivMorphCalc>
  );
};

export default MorphCalc;
