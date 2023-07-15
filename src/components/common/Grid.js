import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-column-gap: 2.5%;
  max-width: 1200px;
  grid-template-columns: repeat(12, minmax(0, 100px));
  width: 92%;
  margin: 0 auto;
`;

export default Grid;
