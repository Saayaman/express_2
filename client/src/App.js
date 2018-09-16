import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    users: [],
  }

  componentDidMount() {
    axios.get("/api/students")
      .then(res => {
        // const { user } = res.data;
        console.log('res', res);
      //   this.setState({
      //     user,
      // });
    })
  }

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{user.name}</h1>
        </header>
        <p className="App-intro">
          {user.age} years old. Occupation: {user.occupation}
        </p> */}
        His
      </div>
    );
  }
}

export default App;
