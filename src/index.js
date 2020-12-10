import React from 'react';
import ReactDOM from 'react-dom';
import Posts from './components/Posts';
import Photos from './components/Photos';
import Home from './components/Home';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import NotFound from './components/NotFound';
import Header from './components/Header/';
import Footer from './components/Footer';
import SinglePost from './components/SinglePost';
import SinglePhoto from './components/SinglePhoto';

ReactDOM.render(
  <React.StrictMode>
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={(props) => <Home {...props} title="Home Page" />}
          />

          <Route
            exact
            path="/posts"
            component={(props) => <Posts {...props} title="Posts Page" />}
          />
          <Route
            exact
            path="/posts/:id"
            component={(props) => <SinglePost {...props} title="Single Post" />}
          />

          <Route
            exact
            path="/photos"
            component={(props) => <Photos {...props} title="Photos Page" />}
          />
          <Route
            path="/photos/:id"
            component={(props) => <SinglePhoto {...props} title="Single Photo" />}
          />

          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
