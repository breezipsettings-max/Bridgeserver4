const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all route to send index.html for SPA routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Bridgeserver4 active on port ${PORT}`);
});
