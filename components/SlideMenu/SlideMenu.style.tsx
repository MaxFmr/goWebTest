import styled from 'styled-components';
const StyledSlideMenu = styled.section`
  background-color: #564aff;
  display: flex;
  flex-direction: column;
  color: white;
  font-size: 14px;
  position: fixed;
  margin: 10px;
  padding: 15px;
  box-shadow: 0px 2px 5px #0000001a;
  border-radius: 3px;
  font-size: smaller;
  min-height: 250px;
  height: 45%;
  width: 50%;
  z-index: 10;
  @media (min-width: 400px) {
    max-width: 35%;
  }

  .closeIcon {
    opacity: 0.7;
    top: 10px;
    left: 105%;
    position: absolute;
    cursor: pointer;
    :hover {
      opacity: 1;
    }
  }

  .logo {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    img {
      object-fit: cover;
    }
    margin-bottom: 30px;
  }
  .nav {
    ul {
      margin-top: 20px;
      list-style-type: none;
      .circle {
        margin-right: 5px;
      }
    }
    li {
      margin-top: 15px;
    }
    .bar {
      border: solid #8d85fc 1px;
      margin-top: 15px;
    }

    button {
      background: none;
      border: none;
      color: white;
      margin-top: 30px;
      font-size: 12px;
    }
  }
`;
export default StyledSlideMenu;
