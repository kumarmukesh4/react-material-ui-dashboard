import React, { useEffect } from 'react';
import './App.scss';

import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Layout2 from './hoc/layout/Layout'




const home = () => {
  return (
    <h1>Home</h1>
  )
}

const about = () => {
  return (
    <h1>About</h1>
  )
}

const service = () => {
  return (
    <h1>Service</h1>
  )
}



function App() {




  return (
    <div className="App">

      
      <Layout2>
        <Switch>
          <Route path="/home" component={home} />
          <Route path="/about" component={about} />
          <Route path="/service" component={service} />
          <Redirect to="/home" />
        </Switch>
      </Layout2>



      {/* <Layout>
        <Switch>
          <Route path="/home" component={home} />
          <Route path="/about" component={about} />
          <Route path="/service" component={service} />
          <Redirect to="/home" />
        </Switch>
      </Layout> */}
    </div>
  );
}



export default App;
