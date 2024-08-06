import { NextRequest, NextResponse } from 'next/server';
import mailchimp from '@mailchimp/mailchimp_marketing';

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

export async function POST(request: NextRequest) {
	const body: NewsletterSignup = await request.json();
	console.log('Received body:', body);
	const { email, name } = body;

	if (!email) {
		return NextResponse.json({ error: 'Email is required' }, { status: 400 });
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

		return NextResponse.json(
			{
				message: 'Signup successful',
				memberId: response.id,
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error('Newsletter signup error:', error);
		return NextResponse.json(
			{
				error: (error as Error).message || 'Error signing up',
			},
			{ status: 500 }
		);
	}
}
