import models from '../models';

const App = models('App');

export function getSomething(req, res) {
  return res.status(200).end();
}
