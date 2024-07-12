import express from 'express';
import { json } from 'body-parser';
import connectDB from './config/mongooseConnect';
import urlRouter from './routes/urlRouter';

export const app = express();

app.use(json());

app.use('/api/url', urlRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await connectDB();
});
