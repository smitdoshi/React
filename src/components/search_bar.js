import React, {Component} from 'react';

class SearchBar extends Component {
  render(){

    return <input onChange = {event => console.log(event.target.value)}/>;
  }

}
// index needs referrence in order to render searchbar in it.

export default SearchBar;
