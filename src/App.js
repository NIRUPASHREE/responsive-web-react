import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
  grid-gap: 6px;
`;

// display: flex;
//   flex-wrap: wrap;
// justify-content: space-around;
//  justify-content: space-between;
const Rect = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Wrapper>
      <Rect style={{ color: 'white', backgroundColor: 'black' }}>box1</Rect>
      <Rect style={{ backgroundColor: 'grey' }}>box2</Rect>
      <Rect style={{ backgroundColor: 'pink' }}>box3</Rect>
    </Wrapper>
  );
}

export default App;


/**
 * The grid-template-columns property specifies the columns of the grid. 
 * Using auto-fit, the code above tells the browser to create as many columns as possible but maintaining that 
 * each column should have a minimum width of X pixels. Specifying 1fr for the maximum width allows 
 * columns to span the whole width of the container if required. The line grid-gap: 16px; 
 * creates a consistent gutter of 16 pixels between grid cells.
 */