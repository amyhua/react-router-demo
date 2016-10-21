import { Router, Route, Link, browserHistory } from 'react-router';
import React, { Component } from 'react';
import { render } from 'react-dom';

const App = React.createClass({
  render() {
    return <div className="App">
      <h1>My App!</h1>
      <div className="body">
        {this.props.children}
      </div>
    </div>
  }
})

const Contacts = React.createClass({
  render() {
    return <h1>Welcome to my Contacts!</h1>
  }
})
const About = React.createClass({
  render() {
    return <h1>What it is all About</h1>
  }
})
const NoMatch = React.createClass({
  render() {

  }
})

const Users = React.createClass({
  render() {
    return (
      <div>
        <h1>Users</h1>
        <div className="master">
          <ul>
            {/* use Link to route around the app */}
            {this.state.users.map(user => (
              <li key={user.id}><Link to={`/user/${user.id}`}>{user.name}</Link></li>
            ))}
          </ul>
        </div>
        <div className="detail">
          {this.props.children}
        </div>
      </div>
    )
  }
})

const User = React.createClass({
  componentDidMount() {
    this.setState({
      // route components are rendered with useful information, like URL params
      user: findUserById(this.props.params.userId)
    })
  },

  render() {
    return (
      <div>
        <h2>{this.state.user.name}</h2>
        {/* etc. */}
      </div>
    )
  }
})


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="contacts" component={Contacts}/>
    </Route>
  </Router>
), document.getElementById('app'))