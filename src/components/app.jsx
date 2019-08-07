import React, { Component } from 'react';

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <Gif id="xT9IgDEI1iZyb2wqo8"/>
        </div>
        <div className="right-scene">

        </div>
      </div>
    );
  }
}

export default App;
