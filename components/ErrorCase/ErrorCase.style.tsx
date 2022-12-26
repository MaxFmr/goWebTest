import styled from 'styled-components';
const StyledError = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
  height: 100vh;
  .box {
    display: flex;
    flex-direction: column;
    box-shadow: 0px 2px 5px #0000001a;
    justify-content: center;
    align-items: center;
    text-align: justify;
    height: 30%;
    padding: 3%;

    .buttons {
      display: flex;
      width: 60%;
      margin-top: 10px;
      display: flex;
      justify-content: center;
      button {
        margin: 5px;
        padding: 5px;
        cursor: pointer;
        font-size: 16px;
        font-weight: 100;
        border-radius: 3px;
        color: #ffff;
        border: none;
        background: #564aff 0% 0% no-repeat padding-box;
      }
    }
  }
`;
export default StyledError;
