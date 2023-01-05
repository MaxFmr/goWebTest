import styled from 'styled-components';
const StyledSlideMenu = styled.section`
  height: 100vh;
  width: 100vw;
  position: absolute;
  background-color: #8d85fc;
  z-index: 10;
  .menu {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 50%;
    width: 60vw;
    background-color: #564aff;
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 14px;
    position: fixed;
    padding: 15px;
    box-shadow: 0px 2px 5px #0000001a;
    border-radius: 3px;
    font-size: smaller;
    min-height: 250px;
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
    }
    .nav {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
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

      .logout {
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
    }
  }
`;
export default StyledSlideMenu;
