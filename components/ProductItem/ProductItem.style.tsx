import styled from 'styled-components';
const StyledProductItem = styled.div<{
  category: string;
  productId: number;
  selectedProductId: number | undefined;
}>`
  border-radius: 3px;
  box-shadow: 0px 2px 5px #0000001a;
  :hover {
    box-shadow: 0px 4px 10px #0000001a;
  }
  cursor: pointer;
  height: 64px;
  display: flex;
  margin: 10px 0px;
  padding: 20px;
  align-items: center;
  color: #707070;
  background-color: #ffffff;
  @media (max-width: 780px) {
    height: inherit;
  }
  border: ${(props) =>
    props.productId === props.selectedProductId && '#5649FF solid 1px'};
  .item {
    display: flex;
    width: 100%;
    align-items: center;
    .name {
      flex: 4;
      overflow: hidden;
      font-weight: 500;
      @media (max-width: 780px) {
        overflow: hidden;
        margin-right: 10px;
      }
    }
    .category {
      flex: 1;
      display: flex;
      text-align: center;
      div {
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
        font-size: 16px;
        padding: 7px 13px;
        font-weight: 300;
        margin-right: 10px;
        @media (max-width: 1650px) {
          font-size: 12px;
        }
        @media (max-width: 780px) {
          font-size: 10px;
        }
      }
    }
    .price {
      flex: 1;
      display: flex;
    }
    .vat {
      flex: 1;
      margin-left: 10px;
    }
  }
`;
export default StyledProductItem;
