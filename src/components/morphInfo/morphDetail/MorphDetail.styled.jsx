import styled from 'styled-components/macro';

/* MorphDetail */
export const MorphDetailDev = styled.main`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;
export const ImgGallery = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  .mainImg {
    width: 100%;
    height: 335px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  .subImg {
    width: 70px;
    height: 70px;
    border-radius: 10px;
    cursor: pointer;
  }
`;
export const MorphInfoDetail = styled.div`
  border-radius: 10px 10px 0 0px;
  background: #f6dfa4;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20px;
  padding: 35px 20px;
  color: #000000;
  .morphName {
    font-weight: 800;
    font-size: 24px;
  }
  .morphInfo {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.6;
  }
`;
