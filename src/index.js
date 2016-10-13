import React from 'react';   // Is used to create and manage our components
import ReactDOM from 'react-dom'; // is used to actually interact with application


// Create a new component. This component should produce
// some HTMl

const App = () => {
  return <div> Hello World from Scratch </div>;
}

// Take this component's generated HTML and put it
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
