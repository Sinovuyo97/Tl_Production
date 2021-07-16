import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import DotLoader  from 'react-spinners/DotLoader';
import React, {useState, useEffect} from "react";
import { css } from "@emotion/react";
import './App.css';
import NavigationBar from './components/navigationbar';
import Banner from './components/banner';
import Services from './components/services';
import Footer from './components/footer';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },500);
  },[])
  return (
    <div className="screenLoading">
     
      {
        
        loading ?
          <DotLoader
          size={200}
          color={'#a05b82'}
          loading={loading}
          />
      :
      <Router>
        <Switch>
          <Route axact path="/" component={NavigationBar}/>
          <Route  path="/" component={Banner}/>
          <Route  path="/" component={Services}/>
          <Route  path="/" component={Footer}/>
        </Switch>
      </Router>
    }
      </div>
  );
}

export default App;
