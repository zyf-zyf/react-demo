import React from 'react';

import './style/App.css';
//import Board from './components/Board'
function Welcome(props) {
  return <h1>Helllo, {props.name}</h1>
}

 class Welcomes extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <h2>Helllo, {this.props.name}</h2>
    )
  }
}
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Welcome name='react'></Welcome>
        <Welcome name='reactDom'></Welcome>
        <Welcome name='reactComponent'></Welcome>
        <Welcomes name='react'></Welcomes>
        <Welcomes name='reactDom'></Welcomes>
        <Welcomes name='reactComponent'></Welcomes>
      </div>
    )
  }
}

