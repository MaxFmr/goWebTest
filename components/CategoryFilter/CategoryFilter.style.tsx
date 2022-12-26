import styled from 'styled-components';
const StyledCategoryFilter = styled.section`
  color: #ffff;
  position: relative;
  top: 120px;
  right: 50px;
  background-color: #564aff;
  padding: 10px;
  border-radius: 3px;
  width: 120px;

  ul {
    li {
      list-style-type: none;

      padding: 5px 0px;
      cursor: pointer;
      :hover {
        opacity: 0.5;
      }
    }
  }
`;
export default StyledCategoryFilter;
