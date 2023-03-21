import styled from 'styled-components/macro';

/* MorphInfo */
export const MorphInfoMain = styled.main`
  padding-left: 20px;
  padding-right: 20px;
`;
export const MorphListUL = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

/* MorphListItem */
export const MorphListItemFigure = styled.figure`
  margin-top: 20px;
  img {
    width: 158px;
    height: 200px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    object-fit: cover;
  }
  figcaption {
    color: #000000;
    font-size: 16px;
    margin-top: 10px;
  }
`;
