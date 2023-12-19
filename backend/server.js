const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://NITJSR:password%40123@nsswebsite.yvrtnof.mongodb.net/';
const databaseName = 'Nss_Certificate_Data';
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());



// Verify Certificate endpoint
app.post('/verify-certificate', async (req, res) => {
  const { certificateId } = req.body;
  console.log(certificateId);
  const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(databaseName);
    const collection = db.collection('Nss');

    const certificate = await collection.findOne({ Certificate: certificateId });

    if (certificate) {
      console.log(`Name: ${certificate.name}, Certificate ID: ${certificate.Certificate}`);
      res.json({ result: 'valid', receivedData: certificateId ,name: certificate.name ,rollno:certificate.rollno});
    } else {
      res.json({ result: 'not valid', receivedData: certificateId });
      console.log(`Certificate ID ${certificateId} is not present in the data`);
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ result: 'error', message: error.message, receivedData: certificateId });
  }
  
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
