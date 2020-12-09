import React from 'react';
import ReactDOM from 'react-dom';
import Posts from './components/Posts';
import Photos from './components/Photos';
import Home from './components/Home';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import NotFound from './components/NotFound';
import Header from './components/Header/';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <Home title="Home Page"/>} />
          <Route path="/posts" component={() => <Posts title="Posts Page"/>} />
          <Route path="/photos" component={() => <Photos title="Photos Page"/>} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
