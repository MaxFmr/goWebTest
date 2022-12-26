import styled from 'styled-components';
const StyledDetails = styled.section<{
  category: string | undefined;
  price: number | undefined;
  selectedPrice: number | undefined;
}>`
  width: 100%;

  .header {
    margin-top: 50px;

    padding: 5%;
    width: 100%;
    display: flex;
    justify-content: center;
    .backBtn {
      border: none;
      background: none;
      position: relative;
      left: -10%;
      margin-left: 10px;
      @media (max-width: 780px) {
        left: -10%;
      }
      @media (max-width: 1400px) {
        left: -5%;
      }
    }

    .title {
      display: flex;
      text-align: center;
      align-self: center;

      h1 {
        color: #564aff;
        font-size: 36px;
        font-weight: 500;
        @media (max-width: 910px) {
          font-size: 25px;
        }
      }
    }
  }

  .info {
    color: #707070;
    width: 100%;
    display: flex;
    height: 100%;
    margin-left: 5%;
    @media (max-width: 780px) {
      flex-direction: column;
    }

    h2 {
      font-size: 24px;
      color: #564aff;
      margin-bottom: 19px;
    }
    .view {
      box-shadow: 0px 2px 5px #0000001a;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      background-color: #ffff;
      width: 30%;
      height: 50%;
      @media (max-width: 780px) {
        width: 90%;
      }
      .image {
        object-fit: contain;
      }
    }
    .descPriceUpdate {
      @media (max-width: 780px) {
        width: 100%;
      }
      width: 30%;
      margin-left: 5%;
      .description {
        width: 80%;
        text-align: justify;
        margin-bottom: 36px;
        @media (max-width: 780px) {
          margin-top: 5%;
        }
      }

      .price {
        display: flex;
        flex-direction: column;

        .priceTag {
          display: flex;
          align-items: center;
          justify-content: space-between;
          @media (max-width: 780px) {
            width: 80%;
          }
          .input {
            height: 40px;
            width: 144px;
            border: 1px solid #564aff;
            border-radius: 3px;

            display: flex;
            padding: 0px 10px;
            align-items: center;
            margin-right: 3%;

            input {
              font-size: 16px;
              border: none;
              width: 100%;
              color: #707070;
              background-color: #fbfbfb;
              :focus {
                outline: none;
              }
            }
          }
        }

        button {
          margin-top: 40px;
          font-size: 16px;
          font-weight: 100;
          border-radius: 3px;
          color: #ffff;
          border: none;
          width: 137px;
          height: 40px;
          background: #564aff 0% 0% no-repeat padding-box;
          opacity: ${(props) => props.price === props.selectedPrice && '0.5'};
          cursor: ${(props) =>
            props.price === props.selectedPrice && 'not-allowed'};
        }
      }
    }
    .category {
      height: 200px;
      display: flex;
      flex-direction: column;
      @media (max-width: 780px) {
        width: 100%;
        padding: 5%;
      }
      div {
        text-align: center;
        @media (max-width: 780px) {
          max-width: 30%;
          font-size: smaller;
        }
        background-color: ${(props) =>
          props.category === "men's clothing" && '#FFA846'};
        background-color: ${(props) =>
          props.category === 'jewelery' && '#32B436'};
        background-color: ${(props) =>
          props.category === 'electronics' && '#FA7D6F'};
        background-color: ${(props) =>
          props.category === "women's clothing" && '#CF688F'};
        height: 36px;
        color: #ffffff;
        border-radius: 50px;
        padding: 7px 0px;
        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 16px;
        padding: 7px 13px;
        font-weight: 300;
      }
    }
  }
`;
export default StyledDetails;
