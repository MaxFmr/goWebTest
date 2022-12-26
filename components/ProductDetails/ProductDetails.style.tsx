import styled from 'styled-components';
const StyledProductDetails = styled.section`
  display: flex;
  min-height: 100vh;
  background-color: #fbfbfb;
  width: 100%;
  .menuIcon {
    @media (min-width: 1400px) {
      display: none;
    }
    position: absolute;
    top: 20px;
    left: 20px;
    opacity: 0.7;

    cursor: pointer;
    :hover {
      opacity: 1;
    }
  }
`;
export default StyledProductDetails;
