import type {NextApiRequest, NextApiResponse} from 'next';
import mailgun from 'mailgun-js';
import {verify} from 'hcaptcha';

import rateLimit from '../../utils/rate-limit';

interface Message {
	name: string;
	email: string;
	message: string;
	token: string;
}

const limiter = rateLimit({
	interval: 60 * 1000, // 60 seconds
	uniqueTokenPerInterval: 50, // Max 50 users per second
});
const mg = mailgun({
	apiKey: process.env.NEXT_MAILGUN_KEY!,
	domain: process.env.NEXT_MAILGUN_DOMAIN!,
});

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
	const message: Message = JSON.parse(request.body);

	if ((await verify(process.env.NEXT_HCAPTCHA_SECRET!, message.token)).success) {
		try {
			await limiter.check(response, 3, 'CACHE_TOKEN'); // 3 requests per minute

			const data = {
				from: `Mailgun <${process.env.NEXT_MAILGUN_MAIL!}>`,
				to: 'xxczaki@pm.me',
				subject: '[Website] New contact form submission',
				text: `Name: ${message.name}
Email: ${message.email}

---------

${message.message}
	`,
			};

			await mg.messages().send(data, error => {
				if (error) {
					response.status(500).send({message: error.message});
				} else {
					response.status(200).json({message: 'OK'});
				}
			});
		} catch {
			response.status(429).json({message: 'Rate limit exceeded - max. 3 requests per minute'});
		}
	} else {
		response.status(500).json({message: 'Invalid hCaptcha token'});
	}
};

export default handler;

