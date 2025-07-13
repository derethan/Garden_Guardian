import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './QRCodeGenerator.css';

const QRCodeGenerator = ({ initialUrl = 'https://google.com', urlInputDisabled = false }) => {
  const [url, setUrl] = useState(initialUrl);

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  return (
    <div className="qr-code-generator">
      <h2>QR Code Generator</h2>
      <div className="input-container">
        <label htmlFor="url-input">Website URL:</label>
        <input
          id="url-input"
          type="text"
          value={url}
          onChange={handleUrlChange}
          disabled={urlInputDisabled}
        />
      </div>
      {url && (
        <div className="qr-code-container">
          <QRCode value={url} size={256} />
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
