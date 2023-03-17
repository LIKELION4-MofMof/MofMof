import {
  SelectedBtnClose,
  SelectedBtnContainer,
} from './MorphInputContainer.styled';

const SelectedBtn = ({ morph }) => {
  return (
    <SelectedBtnContainer>
      <span>{morph.korName}</span>
      <SelectedBtnClose type="button"></SelectedBtnClose>
    </SelectedBtnContainer>
  );
};

export default SelectedBtn;
