import { Meteor } from 'meteor/meteor';
import '../api/friends.js';
import vision from '@google-cloud/vision';
import cloudinary from 'cloudinary';
import Friends from '../api/friends.js';

Meteor.startup(() => {
  // code to run on server at startup
});

const extractName = async (client, img_url) => {
  const [result] = await client.textDetection(img_url);
  const [annotation] = result.textAnnotations;
  const labels = result.labelAnnotations;
  const text = annotation.description;
  const tokens = text.split(/\s/).filter(x=>x.match(/[A-Z][a-z]+/));
  return tokens[0];
}

async function parse_image(img_url) {
  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  // Performs label detection on the image file
  const friendName = await extractName(client, img_url);
  console.log("Extracted name from image:", friendName);

  Friends.insert({
    user: Meteor.userId(),
    createdAt: Date.now(),
    name: friendName
  });

  return friendName;
}

async function upload() {
  cloudinary.v2.uploader.upload('/Users/ox/dating-tracker/wakeupcat.jpg',
  {resource_type: "image", public_id: "mycat",
  overwrite: true},
  (error, result) => {
    console.log(result, error)
  });
}

Meteor.methods({
  'google_vision_call'(image_id) {
    a = parse_image(image_id).await();
    return a;
  },
  'cloudinary_upload'(image_id) { upload(); },
  'ping'() { return "pong"; }
})
