import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/info">소개</Link>
        </li>
        <li>
          <Link to="/profile/hjcho">내 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">홍길동 프로필</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true} />
      <Route path={['/about', '/info']} component={About} />
      <Route path="/profile/:username" component={Profile} />
    </div>
  );
};

export default App;
