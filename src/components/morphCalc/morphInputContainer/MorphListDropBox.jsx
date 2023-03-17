import MorphButton from './MorphButton';
import { ButtonUl } from './MorphInputContainer.styled';

const MorphListDropBox = ({ morphList, insertSelectedBox }) => {
  return (
    <ButtonUl>
      {morphList.map((morph) => (
        <li key={morph.id}>
          <MorphButton morph={morph} insertSelectedBox={insertSelectedBox} />
        </li>
      ))}
    </ButtonUl>
  );
};

export default MorphListDropBox;
