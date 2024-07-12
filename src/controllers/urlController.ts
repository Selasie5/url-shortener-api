import { Request, Response } from 'express';
import URL  from '../models/urlModel';
import { nanoid } from 'nanoid';

export const shortenUrl = async (req: Request, res: Response) => {
    const { redirectUrl } = req.body;

    if (!redirectUrl) {
        return res.status(400).json({ message: 'Redirect URL is required' });
    }

    const shortId = nanoid();
    const newUrl = new URL({ shortId, redirectUrl, visitHistory: [] });
    await newUrl.save();

    return res.status(201).json({ shortId });
};

export const redirectUrl = async (req: Request, res: Response) => {
    const { shortId } = req.params;
    const urlRecord = await URL.findOne({ shortId });

    if (!urlRecord) {
        return res.status(404).json({ message: 'URL not found' });
    }

    urlRecord.visitHistory.push({ timeStamp: Date.now() });
    await urlRecord.save();

    return res.redirect(urlRecord.redirectUrl);
};
