import express from 'express';

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Timezones by location app is running on port ${port}`);
});
