import express from 'express';
import * as dotenv from 'dotenv';

import {Configuration, OpenAiApi} from 'openai';
// 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
dotenv.config();

const router = express.Router()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAiApi(configuration);

router.route('/').get((req, res) => {
    res.send("Hello From Dalle")
})

export default router;
