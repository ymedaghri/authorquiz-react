import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/bootstrap.min.css'
import Sum from './Sum'

class AuthorQuiz extends Component {
  render() {
    return (
      <div className="container">
       <Sum a={10} b={6}/>
      </div>
    );
  }
}

export default AuthorQuiz;
