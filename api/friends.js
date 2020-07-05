import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

Friends = new Mongo.Collection('friends');
Friends.schema = new SimpleSchema({
  name:           { type:String, defaultValue:"Jane Doe" },
  age:            { type:Number, defaultValue:18 },
  attractiveness: { type:Number, defaultValue:10 },
  createdAt:      { type:Date },
  user:           { type:String },
  app:            { type:String, defaultValue:'NoneSelected' },
  phone:          { type:String, defaultValue:'' },
  instagram:      { type:String, defaultValue:'' },
  notes:          { type:String, defaultValue:'' },
  bucket:         { type:String, defaultValue:'Date' }
});
Friends.attachSchema(Friends.schema);

export default Friends;
