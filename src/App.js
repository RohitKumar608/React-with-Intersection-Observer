import React, { Component } from "react";
import LazyLoadImg from './components/LazyLoadImg'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Eric",
      unreadCount: 1000,
    };
  }

  render() {
    return (
     <div>
       <LazyLoadImg />
     </div>
    );
  }
}

export default App;
