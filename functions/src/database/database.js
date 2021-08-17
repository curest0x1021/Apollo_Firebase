const admin = require("firebase-admin");

// To generate a private key file for your service account:
// 1. In the Firebase console, open Settings > Service Accounts.
// 2. Click Generate New Private Key, then confirm by clicking Generate Key.
// 3. Store the JSON file in the `functions/resources/` directory

const serviceAccount = require(".././resources/ghost-writer-alpha-firebase-adminsdk-3d6h7-6d2d454f86.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ghost-writer-alpha.firebaseio.com",
});

module.exports = admin;
