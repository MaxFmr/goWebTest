import styled from 'styled-components';
const StyledProductsList = styled.section`
  padding: 68px 50px;
  @media (max-width: 780px) {
    padding: 5px;
  }
  display: flex;
  flex-direction: column;
  width: 80%;
  background-color: #fbfbfb;

  @media (max-width: 1400px) {
    width: 100vw;
  }
  @media (max-width: 780px) {
    font-size: 12px;
  }

  h1 {
    margin: 0 auto;
    color: #564aff;
    font-size: 36px;
    font-weight: 500;
    text-align: center;
    @media (max-width: 780px) {
      margin-top: 20%;
    }
  }
  .column {
    background-color: #564aff;
    border-radius: 3px;
    margin-top: 68px;
    height: 50px;
    color: white;
    display: flex;
    align-items: center;
    padding: 20px;
    .name {
      flex: 4;
    }

    .category {
      flex: 1;
      display: flex;
      align-items: center;
      width: 65px;
      height: 40px;
      cursor: pointer;
    }

    .price {
      flex: 1;
      @media (max-width: 780px) {
        margin-left: 10px;
      }
    }
    .vat {
      flex: 1;
      text-align: center;

      .including {
        font-weight: 300;
      }
    }
  }
`;
export default StyledProductsList;
