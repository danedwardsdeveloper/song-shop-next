import express, { Request, Response } from 'express';
import mailchimp from '@mailchimp/mailchimp_marketing';
import dotenv from 'dotenv';
dotenv.config();

import setupCors from './middleware/cors.js';

const app = express();
app.use(express.json());
setupCors(app);

mailchimp.setConfig({
	apiKey: process.env.MAILCHIMP_API_KEY!,
	server: process.env.MAILCHIMP_SERVER!,
});

async function callPing() {
	const response = await mailchimp.ping.get();
	console.log(response);
}

callPing();

interface NewsletterSignup {
	email: string;
	name: string;
}

app.get('/', (req: Request, res: Response) => {
	res.json({ message: 'Song Shop newsletter microservice API' });
});

app.post(
	'/subscribe',
	async (req: Request<{}, {}, NewsletterSignup>, res: Response) => {
		const { email, name } = req.body;

		if (!email) {
			return res.status(400).json({ error: 'Email is required' });
		}

		try {
			const response = await mailchimp.lists.addListMember(
				process.env.MAILCHIMP_LIST_ID!,
				{
					email_address: email,
					status: 'subscribed',
					merge_fields: {
						FNAME: name,
					},
				}
			);

			res.status(200).json({
				message: 'Signup successful',
				memberId: response.id,
			});
		} catch (error) {
			console.error('Newsletter signup error:', error);
			res.status(500).json({
				error: (error as Error).message || 'Error signing up',
			});
		}
	}
);

app.listen(process.env.PORT || 3000, () => {
	console.log(`App listening at http://localhost:3000`);
});
