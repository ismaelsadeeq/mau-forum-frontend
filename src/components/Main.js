import React from 'react'
import {Switch , Route,Redirect} from 'react-router-dom'
import Home from './Home'
import Post from './Post'

function Main() {
  return (
    <div>
      <Switch>
        <Route  path="/" exact component={Home} />
        <Route  path="/post" exact component={Post} />
        <Redirect path="/" />
      </Switch>
    </div> 
  )
}

export default Main
