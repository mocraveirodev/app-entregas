import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.APP_PORT || 3000;

app.listen(PORT, () => {
    console.info(`Server running on port: ${PORT}`);
});
