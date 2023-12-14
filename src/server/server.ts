import express from 'express';
import path from 'path';

const app: express.Application = express();
const port: number = 3069;

// Serve your JSON file
app.get('/', (req, res) => {
    // Adjust the path to reach the JSON file from the dist directory
    const jsonFilePath = path.join(__dirname, '..',  '..', 'data', 'results.json');
    res.sendFile(jsonFilePath);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
