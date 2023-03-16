import styled from 'styled-components';
import MorphInputContainer from './morphInputContainer/MorphInputContainer';

const DivMorphCalc = styled.div`
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
