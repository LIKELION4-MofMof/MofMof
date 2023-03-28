import styled from 'styled-components/macro';
import favorite from 'assets/icon/favorite.svg';

export const GeckoContainer = styled.div``;

export const GeckoPageTop = styled.div`
  position: relative;
`;

export const GeckoPageTitleWrapper = styled.div`
  position: relative;
  margin-bottom: 0 0 24px 0;
  height: 220px;
  /* width: 250px; */
  background: transparent;
  border-radius: 20px;
`;

export const GeckoPageTitle = styled.h3`
  font-weight: 600;
  font-size: 20px;
  position: absolute;
  top: 20px;
  left: 20px;
  color: #ff5500;
`;

export const GeckoPageDescription = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  position: absolute;
  bottom: 40px;
  right: 15px;
  width: 190px;
  line-height: 17px;
`;

export const GeckoImg = styled.img`
  width: 375px;
  height: 198px;
  position: absolute;
  left: 0;
`;

export const ServiceCategory = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
  margin-top: 30px auto 0 auto;
`;

export const PageMoveBtn = styled.button`
  width: 140px;
  height: 180px;
  background: #ff5500;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
  left: 5px;
  color: #ffffff;
  font-weight: 800;
  box-shadow: 0 3px 5px 5px rgba(76, 76, 76, 0.2);
  position: relative;
`;

export const PageMoveBtn2 = styled.button`
  width: 140px;
  height: 180px;
  background: #ff5500;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
  left: 33px;
  color: #ffffff;
  font-weight: 800;
  box-shadow: 0 3px 5px 5px rgba(76, 76, 76, 0.2);
  position: relative;
`;

export const BtnName = styled.p`
  color: #ffffff;
  margin: 0 auto;
`;

export const FavoriteBtn = styled.button`
  background: url(${favorite});
  width: 19px;
  height: 19px;
  position: absolute;
  top: 19px;
  left: 340px;
`;

export const PageMoveIcon = styled.img`
  width: 70px;
  height: 70px;
  top: 40px;
`;
