import { MorphListItemFigure } from './MorphInfo.styled';
import img1 from 'assets/fattailMorphImage/fattailNormal1.png';

const FattailMorphListItem = ({ morph }) => {
  return (
    <MorphListItemFigure>
      <img src={img1} alt={morph.alt[0]} />
      <figcaption>{morph.name}</figcaption>
    </MorphListItemFigure>
  );
};

export default FattailMorphListItem;
