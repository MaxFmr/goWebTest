import styled from 'styled-components';
const StyledHomePAge = styled.section`
  display: flex;
  height: 100%;
  justify-content: space-between;

  @media (max-width: 1650px) {
    font-size: smaller;
  }

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
export default StyledHomePAge;
