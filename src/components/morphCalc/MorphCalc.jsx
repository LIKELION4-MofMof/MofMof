import styled from 'styled-components';
import MorphInputContainer from './morphInputContainer/MorphInputContainer';

const DivMorphCalc = styled.div`
  width: 375px;
  border: 1px solid black;
  border-radius: 10px;
  height: 100vh;
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
`;

const MorphCalc = () => {
  return (
    <DivMorphCalc>
      <MorphInputContainer title={'아빠'}></MorphInputContainer>
    </DivMorphCalc>
  );
};

export default MorphCalc;
