import styled from 'styled-components';
import Img from '../../assets/image/lizard05.svg';
import Star from '../../assets/icon/star.svg'
import StarFill from '../../assets/icon/star-f.svg'
import { Link } from 'react-router-dom';


export default function Card({id, name, imgUrl,link}) {
  return (
    <Link to={link}>
    <StyledCard>
      <CardTitle>
        <p>{name}</p>
        <StyledButton></StyledButton>
      </CardTitle>
      <StyledImg src={require('../../assets/image/' + imgUrl + '.svg')} alt="" />
    </StyledCard>
    </Link>
    
  )
}

const StyledCard = styled.div`
  width: 158px;
  height: 240px;
  background: #F6DFA4;
  color: #000000;
  border-radius: 20px;
  padding: 20px 10px;
`
const CardTitle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`
const StyledImg = styled.img`
  width: 141px;
  margin-top: 20px;
`
const StyledButton = styled.button`
  background: url(${Star}) no-repeat center;
  width: 24px;
  height: 24px;
  border: none;
`