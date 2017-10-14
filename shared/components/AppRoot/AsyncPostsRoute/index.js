import React from 'react';
import { Link, Route } from 'react-router-dom';
import Post from './Post';

const AsyncPostsRoute = () =>
  (<div>
    <ul>
      <li>
        <Link to="/posts/1">Post 1</Link>
      </li>
      <li>
        <Link to="/posts/2">Post 2</Link>
      </li>
    </ul>

    <hr />

    <Route path="/posts/:id" component={Post} />
  </div>);

export default AsyncPostsRoute;
