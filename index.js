const express = require('express');
const app = express();

// রেলওয়ে এই PORT ভেরিয়েবলটা ব্যবহার করে, তাই এটি অত্যন্ত জরুরি
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World! My first Node app is officially live on Railway.');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
