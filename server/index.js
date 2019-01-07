const express = require("express");
const app = express();
const firebase = require("firebase");
const cors = require("cors");
const functions = require("firebase-functions")

app.use(cors());

// Required for side-effects
require("firebase/firestore");

firebase.initializeApp({
  apiKey: 'AIzaSyBWfUsFLBuA61Fdc9P0dUUpS4mhN07lwEo',
  authDomain: 'hci-fc743.firebaseapp.com',
  projectId: 'hci-fc743'
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

app.get("/articles", async (req, res) => {
  db.collection("articles").get().then(querySnapshot => {
    let list = [];
    querySnapshot.forEach(doc => {
      list.push({id: doc.id, data: doc.data()});
    });
    res.json(list);
  });
});

app.listen(process.env.PORT || 80, () => {
  console.log("Server started");
})

/*const api1 = functions.https.onRequest(app)

module.exports = {
  api1
}*/
