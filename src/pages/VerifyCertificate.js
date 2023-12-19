import React, { useState } from 'react';
import axios from 'axios';
import '../components/verifycertificate.css';

const VerifyCertificate = () => {
  const [certificate, setCertificate] = useState('');
  const [verificationResult, setVerificationResult] = useState('');

  const handleVerify = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await axios.post('http://localhost:5000/verify-certificate', {
        certificateId: certificate,
      });
      console.log(response.data);

      const { receivedData,name, rollno } = response.data
      if (response.data.result === 'valid') {
        console.log(`Valid certificate for Certificate ID ${certificate}`);
        setVerificationResult(`Valid certificate for\nName: ${name}\nCertificate ID: ${receivedData}\nRoll Number: ${rollno}`);
      } else {
        console.log('Certificate not valid');
        setVerificationResult('Certificate not valid');
      }
    } catch (error) {
      console.error('Error occurred:', error);
      setVerificationResult('Error occurred');
    }
  };

  return (
    <div className="container">
      <h1>Certificate Verification</h1>
      <form id="verificationForm" onSubmit={handleVerify}>
        <input
          type="text"
          id="certificateId"
          placeholder="Certificate ID"
          value={certificate}
          required
          onChange={(e) => setCertificate(e.target.value)}
        />
        <button type="submit">Verify</button>
        <p>{verificationResult}</p>
      </form>
    </div>
  );
};

export default VerifyCertificate;
