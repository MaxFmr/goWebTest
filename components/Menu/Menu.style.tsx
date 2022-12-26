import styled from 'styled-components';
const StyledMenu = styled.section`
  width: 30%;
  background-color: #564aff;
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 16px;
  min-height: 100vh;
  @media (max-width: 1650px) {
    font-size: 14px;
  }
  @media (max-width: 1400px) {
    display: none;
  }
  .logo {
    margin: 58px 88px;
  }
  .nav {
    margin-left: 50px;

    ul {
      list-style-type: none;
      .circle {
        margin-right: 15px;
      }
    }
    li {
      margin: 50px 0px 50px;
    }
    .bar {
      border: solid #8d85fc 1px;
      margin-right: 50px;
    }

    button {
      background: none;
      border: none;
      color: white;
      margin-top: 50px;
      font-size: 16px;
    }
  }
`;
export default StyledMenu;
