import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      title: 'Loading...'
    }
  }
  componentDidMount() {
    fetch('/api/hello')
      .then(res => {
        if (!res.ok) throw Error(res.statusText)
        return res.json()
      })
      .then(({greeting}) => this.setState({title: greeting}))
      .catch(e => this.setState({title: e.message}))
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.title}</h2>
        </div>
      </div>
    )
  }
}

export default App
