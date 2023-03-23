import { MorphListItemFigure } from './MorphInfo.styled';

const FattailMorphListItem = ({ morph }) => {
  return (
    <MorphListItemFigure>
      <img src={morph.imgUrl[0]} alt={morph.alt[0]} />
      <figcaption>{morph.name}</figcaption>
    </MorphListItemFigure>
  );
};

export default FattailMorphListItem;
