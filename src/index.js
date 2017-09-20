import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import promise from "redux-promise";

import PostIndex from './components/post_index';
import Footer from './components/footer';
import Header from "./components/header";
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div className="app">
      <Header/>
      <Switch>
        <Route exact path="/" component={() =>< PostIndex />}/>
        <Route render={() => <h1 className="container">Page not found</h1>}/>
      </Switch>
      <Footer/>
    </div>
  </BrowserRouter>
</Provider>, document.querySelector('.container'));
