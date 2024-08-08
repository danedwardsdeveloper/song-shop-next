import { NextRequest, NextResponse } from 'next/server';
import { mailchimpApiKey } from '@/app/environment';

export async function POST(request: NextRequest) {
	const url = `https://us21.api.mailchimp.com/3.0/lists/2faeb74482/members`;

	try {
		const body = await request.json();
		const { email, name } = body;

		if (!email) {
			return new NextResponse('Email is required', { status: 400 });
		}

		const subscriberData = {
			email_address: email,
			status: 'subscribed',
			merge_fields: {
				FNAME: name || '',
			},
		};

		console.log('Attempting to register subscriber with Mailchimp...');
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${mailchimpApiKey}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(subscriberData),
		});

		const data = await response.json();

		if (!response.ok) {
			console.error('Error response from Mailchimp:', data);
			if (data.title === 'Member Exists') {
				return new NextResponse('This email is already subscribed', {
					status: 400,
				});
			}
			throw new Error(data.detail || 'Failed to register subscriber');
		}

		console.log('Mailchimp registration response:', data);

		return new NextResponse('Successfully subscribed', {
			status: 200,
			headers: { 'Content-Type': 'text/plain' },
		});
	} catch (error) {
		console.error('Error registering with Mailchimp:', error);

		if (error instanceof Error) {
			return new NextResponse(
				`Failed to register with Mailchimp: ${error.message}`,
				{
					status: 500,
					headers: { 'Content-Type': 'text/plain' },
				}
			);
		} else {
			return new NextResponse('An unknown error occurred', {
				status: 500,
				headers: { 'Content-Type': 'text/plain' },
			});
		}
	}
}
