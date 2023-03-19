import {
  SelectedBtnClose,
  SelectedBtnContainer,
} from './MorphInputContainer.styled';

const SelectedBtn = ({ morph, remove }) => {
  const cancleSelected = () => {
    remove(morph);
  };
  return (
    <SelectedBtnContainer type={morph.type}>
      <span>{morph.korName}</span>
      <SelectedBtnClose
        type="button"
        onClick={cancleSelected}
      ></SelectedBtnClose>
    </SelectedBtnContainer>
  );
};

export default SelectedBtn;
