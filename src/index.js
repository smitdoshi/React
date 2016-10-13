import React from 'react';   // Is used to create and manage our components
import ReactDOM from 'react-dom'; // is used to actually interact with application

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDiQ8-t0TzuHiqEmOzTiJMQXCUV_boOdaY';
// Create a new component. This component should produce
// some HTMl

const App = () => {
  return(
    <div>
        <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it
// on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
