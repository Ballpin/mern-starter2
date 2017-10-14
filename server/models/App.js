import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AppSchema = new Schema({});

export default mongoose.model('App', AppSchema);
