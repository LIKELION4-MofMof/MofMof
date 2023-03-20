import { Button } from './MorphInputContainer.styled';

const MorphButton = ({ morph, insert }) => {
  const selectMorph = () => {
    insert(morph);
  };

  return <Button onClick={selectMorph}>{morph.korName}</Button>;
};

export default MorphButton;
