import logo from './logo.svg';
import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import NotFound from './component/NotFound';
import Header from './component/Header';
// import Photo from './features/Photo/pages/Main';

const Photo = React.lazy(() => import('./features/Photo/pages/Main'))

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading...</div>}>

        <Header />
        <BrowserRouter>
          <ul>
            <li><Link to="/photos">Go to photo page</Link></li>
            <li><Link to="/photos/add">Go to add photo page</Link></li>
            <li><Link to="/photos/123">Go to edit photo page</Link></li>
          </ul>

          <Switch>
            <Redirect exact from="/" to="/photo" />
            <Route path="photo" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
