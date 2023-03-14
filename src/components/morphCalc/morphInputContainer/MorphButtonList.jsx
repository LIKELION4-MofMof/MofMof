import styled from "styled-components";
import MorphButton from "./MorphButton";

const ButtonUl = styled.ul`
  border: 1px solid gray;
  max-height: 80px;
  overflow: auto;
  position: relative;
`

const MorphButtonList = ({morphList}) => {
  return (
    <ButtonUl>
      {morphList.map(morph=>(
        <li>
          <MorphButton morph={morph} key={morph.korName} />
        </li>
      ))}
    </ButtonUl>
  );
};

export default MorphButtonList;