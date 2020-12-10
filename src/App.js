import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import NavBar from './components/common/NavBar'
import Home from './components/pages/Home'
import Compare from './components/pages/Compare'
import Footer from './components/common/FooterBar'
import UserProfile from './components/pages/ProfileList/Profile'
import { getCities } from './state/actions/index'
import { connect } from 'react-redux'

const App = props => {
  useEffect(() => {
    props.getCities()
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/compare">
          <Compare />
        </Route>
        <Route path="/profile">
          <UserProfile />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default connect(null, { getCities })(App)
