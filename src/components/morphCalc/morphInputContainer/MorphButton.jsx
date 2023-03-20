import { Button } from './MorphInputContainer.styled';

const MorphButton = ({ morph, insertSelectedBox }) => {
  const selectMorph = () => {
    insertSelectedBox(morph);
  };

  return <Button onClick={selectMorph}>{morph.korName}</Button>;
};

export default MorphButton;
