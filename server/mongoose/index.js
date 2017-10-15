import mongoose from 'mongoose';
import bluebird from 'bluebird';

import config from '../../config';

// MongoDB Connection
mongoose.Promise = bluebird;
mongoose.connect(config('db.mongoURL'), {
  useMongoClient: true,
});

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', () => console.error('Please make sure Mongodb is installed and running!'), // eslint-disable-line no-console
);

export default db;
