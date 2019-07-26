import React from 'react';
import './style/App.css';
import NewLayout from './common/commonComponents/Layout'


export default class App extends React.Component {
  render() {
    return (
      <div className="App">
          <NewLayout></NewLayout>
      </div>
    )
  }
}

