const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Dummy login verification
app.post('/api/login', (req, res) => {
  const { instaId, instaPassword } = req.body;

  // Simple verification (you can add a real check here)
  if (instaId === 'admin' && instaPassword === 'admin123') {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
