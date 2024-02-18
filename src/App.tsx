import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/Home/Home';
import { Page1 } from './components/pages/Page 1/Page 1';
import { Page2WithParams } from './components/pages/Page 2/Page2WithParams';
import Counter from './components/pages/Counter/Counter';
import { routes } from './components/pages/SomeList/routes';
import { OrderMain } from './components/pages/Order';

const LazyPage2 = React.lazy(() => import('./components/pages/Page 2/Page2'));
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/page1'}>Page 1</Link>
            </li>
            <li>
              <Link to={'/page2'}>Page 2</Link>
            </li>
            <li>
              <Link to={'/page2/5/kek?search=no&par=yes'}>Page 2 with Params</Link>
            </li>
            <li>
              <Link to={'/somelist'}>SomeList</Link>
            </li>
            <li>
              <Link to={'/counter'}>Counter</Link>
            </li>
            <li>
              <Link to={'/order'}>Order</Link>
            </li>
            <li>
              <Link to={'/error'}>Error</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path={'/'} element={<Home></Home>}></Route>
          <Route path={'/page1'} element={<Page1></Page1>}></Route>
          <Route path={'/page2'} element={<React.Suspense fallback={<span>.........</span>}>
            <LazyPage2></LazyPage2>
          </React.Suspense>}></Route>
          <Route path={'/page2/:id/:text?'} element={<Page2WithParams></Page2WithParams>}></Route>
          <Route path={'/SomeList'}>
            {routes}
          </Route>
          <Route path={'/counter'} element={<Counter></Counter>}></Route>
          <Route path={'/order'} element={<OrderMain></OrderMain>}></Route>
          <Route path={'*'} element={<span>404</span>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
