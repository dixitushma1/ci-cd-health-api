const express = require('express');

const app = express();

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Testing CI CD functionality completely' });
});

module.exports = app;
