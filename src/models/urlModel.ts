import mongoose, { Document, Schema } from 'mongoose';

interface IURL extends Document {
    shortId: string;
    redirectUrl: string;
    visitHistory: { timeStamp: number }[];
}

const urlSchema: Schema = new Schema({
    shortId: { type: String, required: true, unique: true },
    redirectUrl: { type: String, required: true },
    visitHistory: [{ timeStamp: { type: Number } }],
}, { timestamps: true });

const URL = mongoose.model<IURL>('URL', urlSchema);

export default URL;
