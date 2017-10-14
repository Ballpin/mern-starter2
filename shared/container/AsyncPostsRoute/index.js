import React from 'react';
import { Link, Route } from 'react-router-dom';
import Post from './Post/index';

const AsyncPostsRoute = () =>
  (<div>
    <ul>
      <li>
        <Link to="/posts/cikqgkv4q01ck7453ualdn3hf">Post 1</Link>
      </li>
      <li>
        <Link to="/posts/cikqgkv4q01ck7453ualdn3hd">Post 2</Link>
      </li>
    </ul>

    <hr />

    <Route path="/posts/:cuid" component={Post} />
  </div>);

export default AsyncPostsRoute;
