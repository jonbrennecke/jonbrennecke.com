import * as functions from 'firebase-functions';
import admin from 'firebase-admin';
import cors from 'cors';

admin.initializeApp(functions.config().firebase);

const contactFormRequests = admin.firestore().collection('contactFormRequests');

const corsMiddleware = cors({ origin: true });

export const createContactFormRecord = functions.https.onRequest((req, res) => {
  return corsMiddleware(req, res, async () => {
    try {
      await contactFormRequests.add({
        name: req.body.name,
        email: req.body.email,
        description: req.body.description,
      });
    } catch (error) {
      if (error) {
        res.sendStatus(400);
        return;
      }
      res.sendStatus(201);
    }
  });
});
