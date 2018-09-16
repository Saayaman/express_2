import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    name: '',
    age: null,
    students: [],
  }

  componentDidMount() {
    axios.get("/api/students")
      .then(res => {
        this.setState({
          students: res.data,
      });
    });
  }

  onChange = (e) => {
    console.log('changed log', e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {
    const { age, name } = this.state;
     axios({
       url: "api/students",
       method: 'POST',
       data: {"name": name, "age": age
     }}).then(res => {
      this.setState({
        students: this.state.students.push(res.data),
      });
    });
  }

  render() {
    const { students } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handleSubmit} >
            <div className="form-label">
              <label htmlFor="name">Enter username</label>
              <input id="name" name="name" type="text" onChange={this.onChange} />
            </div>
            <div className="form-label">
              <label htmlFor="age">Enter your age</label>
              <input id="age" name="age" type="text" onChange={this.onChange} />
            </div>
            <button>Send data!</button>
          </form>
        </header>
        {
          students.map(student =>
            <ul key={student.name}>
              <li className="App-intro">
                Name: {student.name}, Age: {student.age}
              </li>
            </ul>
          )
        }
      </div>
    );
  }
}

export default App;
